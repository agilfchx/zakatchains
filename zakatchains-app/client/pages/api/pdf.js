var fs = require('fs');
var ejs = require('ejs');
var pdf = require('html-pdf');
import { create } from 'ipfs-http-client';

export default function handler(req, res) {
  const projectID = '2KAAMkXjgdYr2LJeBvpKHY2FPWA';
  const projectSecret = '0c74c468c320e5b47f56b71369518599';
  const authorization = 'Basic ' + btoa(projectID + ':' + projectSecret);

  const ipfs = create({
    url: 'https://ipfs.infura.io:5001/api/v0',
    headers: {
      authorization,
    },
  });

  const { id, name, email, phoneNumber, amount } = req.body;

  let date_time = new Date();
  let date = ('0' + date_time.getDate()).slice(-2);
  let month = ('0' + (date_time.getMonth() + 1)).slice(-2);
  let year = date_time.getFullYear();
  fs.readFile('./public/template/invoice.ejs', 'utf8', function (err, content) {
    if (err) {
      return res.status(400).send({ error: err });
    }
    content = ejs.render(content, {
      invoice: {
        id,
        name,
        email,
        phoneNumber,
        date: `${date}/${month}/${year}`,
        amount,
        status: 'LUNAS',
      },
    });
    pdf
      .create(content, {
        format: 'Letter',
        orientation: 'landscape',
        childProcessOptions: {
          env: {
            OPENSSL_CONF: '/dev/null',
          },
        },
      })
      .toStream(async function (err, stream) {
        if (err) return console.log(err);
        const writeStream = fs.createWriteStream(`./public/pdf/${id}.pdf`);
        stream.pipe(writeStream);
        writeStream.on('finish', async () => {
          try {
            const file = await fs.promises.readFile(`./public/pdf/${id}.pdf`);
            const fileAdded = await ipfs.add(file);
            console.log(fileAdded);
            res
              .status(200)
              .send({ message: 'Invoice created', path: fileAdded.path });
          } catch (err) {
            res.status(400).send({ error: err });
          }
        });
      });
  });
}
