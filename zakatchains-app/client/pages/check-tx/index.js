import { useState } from "react";
import TableHistory from "../../components/TableHistory";
import useOwner from "../../hooks/useOwner";
import Loader from "../../components/Loader";
import Modal from "../../components/ModalTransaction";

export default function CheckTransactions() {
  const contract = useOwner();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [valid, setValid] = useState(false);
  const [modal, setModal] = useState(false);

  const handleCheckTx = async () => {
    setLoading(true);
    const validation = await contract.verifyID(search);
    setValid(validation);
    setModal(true);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex items-center justify-center w-full m-4 text-center">
        <h1 className="text-4xl font-bold">Check Transaction ID</h1>
      </div>
      <div className="flex flex-col items-center justify-center px-4 py-6 space-y-4 bg-white border border-gray-300 rounded-md shadow-md max-w-7xl">
        <div className="flex flex-col items-center justify-center w-full space-y-2">
          <div className="flex justify-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="border text-sm rounded-lg block w-[35rem] pl-10 p-2.5 bg-white border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search Transaction ID"
                required
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button
              className="p-2.5 ml-2 text-sm font-medium border focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 rounded-full focus:ring-primary-300 "
              onClick={handleCheckTx}>
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
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </div>
      <Loader loading={loading} />
      <Modal show={modal} onClose={() => setModal(false)} valid={valid} />
    </div>
  );
}
