import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function Table({ item }) {
  const convertUnixToDate = (unix) => {
    const date = new Date(unix * 1000);
    const formattedDate = date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return formattedDate;
  };

  return (
    <table className="w-full text-sm text-left">
      <thead className="text-xs text-white uppercase bg-gray-800">
        <tr>
          <th scope="col" className="px-6 py-3">
            Transaction ID
          </th>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Nominal
          </th>
          <th scope="col" className="px-6 py-3">
            Date
          </th>
          <th scope="col" className="px-6 py-3">
            Invoice
          </th>
        </tr>
      </thead>
      <tbody>
        {item.length > 0 &&
          item.map(
            (data, idx) =>
              data.statusPayment === true && (
                <tr className="bg-white border border-gray-400" key={idx}>
                  <td className="px-6 py-4">{data.recordID}</td>
                  <td className="px-6 py-4">{data.name}</td>
                  <td className="px-6 py-4">
                    Rp
                    {data.amount
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </td>
                  <td className="px-6 py-4">{convertUnixToDate(data.date)}</td>
                  <td className="px-6 py-4">
                    <a
                      href={`https://zakatpayment.infura-ipfs.io/ipfs/${data.ipfsHash}`}
                      target="_blank"
                      className="font-bold text-blue-600 hover:underline">
                      <FontAwesomeIcon
                        icon={faDownload}
                        className="text-2xl"
                        width={20}
                      />
                    </a>
                  </td>
                </tr>
              )
          )}
      </tbody>
    </table>
  );
}
