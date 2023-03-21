import { ethers } from "ethers";
import { Zakat } from "../pages/abi/abi";

const ownerPK =
  "80d7e1761dfb908c5317458b573dbc3d6ca79dfd51811735aed018afa439a444";

const useOwner = () => {
  const rpcUrl = "HTTP://192.168.0.115:8545";
  const contractAddress = "0xde886d90a09Fc460Db6E6544055dF9034A361348"; // Change this to deployed contract address

  const customHttpProvider = new ethers.providers.JsonRpcProvider(rpcUrl);
  // Konfirmasi Transaksi oleh wallet / Signers
  const wallet = new ethers.Wallet(ownerPK, customHttpProvider);
  const tokenContract = new ethers.Contract(contractAddress, Zakat, wallet);
  return tokenContract;
};

export default useOwner;
