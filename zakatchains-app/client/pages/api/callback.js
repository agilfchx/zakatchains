var fs = require("fs");
var ejs = require("ejs");
var pdf = require("html-pdf");
import { create } from "ipfs-http-client";
import useOwner from "../../hooks/useOwner";

export default async function Callback(req, res) {
  // IPFS
  const projectID = "2KAAMkXjgdYr2LJeBvpKHY2FPWA";
  const projectSecret = "0c74c468c320e5b47f56b71369518599";
  const authorization = "Basic " + btoa(projectID + ":" + projectSecret);

  // Xendit
  const callbackToken = "8Ytb7a33CDqPds140tmGkLeewnlF1DW8EHLljx3OKS8xMbdz";
  const xCallbackToken = req.headers["x-callback-token"];
  const httpMethod = req.method;

  const ipfs = create({
    url: "https://ipfs.infura.io:5001/api/v0",
    headers: {
      authorization,
    },
  });

  let date_time = new Date();
  let date = ("0" + date_time.getDate()).slice(-2);
  let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
  let year = date_time.getFullYear();

  switch (httpMethod) {
    case "POST":
      if (xCallbackToken !== callbackToken) {
        res.status(401).json({ error: "Unauthorized" });
        return;
      } else {
        const resBody = req.body;
        let payment;
        if (resBody.payment_method === "EWALLET") {
          payment = resBody.ewallet_type;
        } else {
          payment = resBody.bank_code;
        }
        try {
          const contract = useOwner();
          await contract.storePaymentGatewayRecord(
            resBody.id,
            resBody.external_id,
            resBody.payment_method,
            resBody.status,
            resBody.amount,
            payment,
            resBody.paid_at,
            resBody.payer_email,
            resBody.description,
            resBody.currency,
            resBody.payment_channel
          );

          fs.readFile(
            "./public/template/invoice.ejs",
            "utf8",
            function (err, content) {
              if (err) {
                return res.status(400).send({ error: err });
              }
              content = ejs.render(content, {
                invoice: {
                  id: resBody.external_id,
                  name: resBody.description,
                  email: resBody.payer_email,
                  phoneNumber: resBody.id,
                  date: `${date}/${month}/${year}`,
                  amount: resBody.amount,
                  status: resBody.status,
                },
              });
              pdf
                .create(content, {
                  format: "Letter",
                  orientation: "landscape",
                  childProcessOptions: {
                    env: {
                      OPENSSL_CONF: "/dev/null",
                    },
                  },
                })
                .toStream(async function (err, stream) {
                  if (err) return console.log(err);
                  const writeStream = fs.createWriteStream(
                    `./public/pdf/${resBody.external_id}.pdf`
                  );
                  stream.pipe(writeStream);
                  writeStream.on("finish", async () => {
                    try {
                      const file = await fs.promises.readFile(
                        `./public/pdf/${resBody.external_id}.pdf`
                      );
                      const fileAdded = await ipfs.add(file);
                      console.log(fileAdded);
                      await contract.updateIPFS(
                        resBody.external_id,
                        fileAdded.path,
                        resBody.id
                      );
                    } catch (err) {
                      res.status(400).send({ error: err });
                    }
                  });
                });
            }
          );
        } catch (err) {
          console.log(err);
        }
        res.status(200).json({ body: resBody });
      }
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${httpMethod} Not Allowed`);
      return;
  }
}
