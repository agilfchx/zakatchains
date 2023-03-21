import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import useOwner from "../hooks/useOwner";

export default function Success() {
  const [data, setData] = useState([]);
  const contract = useOwner();

  useEffect(() => {
    const initContract = async () => {
      const datas = await contract.getPaymentGatewayRecord();
      setData(datas);
    };
    initContract();
  }, []);

  console.log(data);

  return (
    <div className="flex flex-col items-center justify-center h-[35.1rem] py-2">
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <FontAwesomeIcon
          icon={faCheckCircle}
          className="w-24 h-24 text-6xl text-green-500"
        />

        <h1 className="mt-4 text-6xl font-bold">Success!</h1>
        <p className="mt-3 text-2xl">
          Your payment has been successfully processed.
        </p>
      </main>
    </div>
  );
}
