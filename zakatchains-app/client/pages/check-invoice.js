import { useState } from "react";
import Modal from "../components/ModalValidation";
import { create } from "ipfs-http-client";
import useOwner from "../hooks/useOwner";
import Loader from "../components/Loader";

const projectID = "2KAAMkXjgdYr2LJeBvpKHY2FPWA";
const projectSecret = "0c74c468c320e5b47f56b71369518599";
const authorization = "Basic " + btoa(projectID + ":" + projectSecret);

const ipfs = create({
  url: "https://ipfs.infura.io:5001/api/v0",
  headers: {
    authorization,
  },
});

export default function CheckInvoice() {
  const contract = useOwner();
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [ipfsHash, setIPFSHash] = useState("");
  const [valid, setValid] = useState(false);
  const verifyInvoice = async () => {
    setLoading(true);
    const invoiceFile = document.getElementById("invoiceFile");
    const file = invoiceFile.files[0];
    const fileAdded = await ipfs.add(file);
    const hash = fileAdded.path;
    const verified = await contract.verifyFile(hash);
    setLoading(false);
    setModal(true);
    hash ? setIPFSHash(hash) : setIPFSHash("");
    verified ? setValid(true) : setValid(false);
  };

  return (
    <div className="flex flex-col items-center justify-center my-60">
      <label className="text-4xl font-bold" htmlFor="invoiceFile">
        Check Invoice
      </label>
      <div className="px-4 py-6 mt-4 space-y-4 bg-white border border-gray-300 rounded-md shadow-md max-w-7xl">
        <div className="flex items-center justify-center">
          <input
            className="block text-sm border rounded-lg cursor-pointer text-black focus:outline-noneborder-gray-600 placeholder-gray-400 w-96 p-2.5 bg-white border-gray-600 "
            id="invoiceFile"
            type="file"
            accept="application/pdf"
          />
          <button
            className="p-2.5 ml-2 text-sm font-medium border focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 rounded-full focus:ring-primary-300"
            onClick={verifyInvoice}>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
          <Loader loading={loading} />
          <Modal
            show={modal}
            onClose={() => setModal(false)}
            hash={ipfsHash}
            valid={valid}
          />
        </div>
      </div>
    </div>
  );
}
