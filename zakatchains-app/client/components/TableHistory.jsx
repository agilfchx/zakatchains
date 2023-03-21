import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function TableHistory({ txID, date, amount, hash }) {
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
    <div className="mt-8 overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-white uppercase bg-gray-800">
          <tr>
            <th scope="col" className="px-6 py-3">
              Transaction ID
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Nominal
            </th>
            <th scope="col" className="px-6 py-3">
              Invoice
            </th>
          </tr>
        </thead>
        {txID.length > 0 &&
          txID.map((data, idx) => {
            let rowClass = "";
            if (idx % 2 === 0) {
              rowClass = "bg-white border border-gray-400";
            } else {
              rowClass = "border-b bg-slate-300 border-gray-700";
            }
            return (
              <tbody key={idx}>
                <tr className={rowClass}>
                  <th scope="row" className="px-6 font-medium">
                    {data}
                  </th>
                  <td className="px-6 py-4">{convertUnixToDate(date[idx])}</td>
                  <td className="px-6 py-4">
                    Rp
                    {amount[idx]
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href={`https://zakatpayment.infura-ipfs.io/ipfs/${hash[idx]}`}
                      target="_blank"
                      className="font-bold text-blue-600 hover:underline">
                      <FontAwesomeIcon
                        icon={faDownload}
                        className="text-blue-600"
                      />
                    </a>
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
}
