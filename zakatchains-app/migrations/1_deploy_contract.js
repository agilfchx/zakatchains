const Zakat = artifacts.require("Zakat");
const TransactionRecord = artifacts.require("TransactionRecord");

module.exports = function (deployer) {
  deployer.deploy(Zakat);
  deployer.deploy(TransactionRecord);
};
