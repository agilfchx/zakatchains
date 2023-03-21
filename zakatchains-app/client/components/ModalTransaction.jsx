import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function Modal({ show, onClose, valid }) {
  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  return show ? (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50" />
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
        <div className="w-[500px] bg-white shadow-xl rounded-lg px-6 pt-6 pb-8 mb-4">
          {valid ? (
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-[#353637]">
                Validation Successful
              </h3>
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-green-500 text-6xl h-24 w-24 my-8"
              />
              <p className="text-[#353637]">Your transaction ID is valid</p>
            </div>
          ) : (
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-[#353637]">
                Validation Failed
              </h3>
              <FontAwesomeIcon
                icon={faXmarkCircle}
                className="text-red-500 text-6xl h-24 w-24 my-8"
              />
              <p className="text-[#353637]">Your transaction ID is invalid</p>
            </div>
          )}
          <div>
            <button
              className="p-4 rounded-lg font-bold w-full bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
              onClick={handleClose}>
              OK
            </button>
          </div>
        </div>
      </div>
    </>
  ) : null;
}
