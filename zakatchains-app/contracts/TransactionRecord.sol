// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract TransactionRecord {
    address owner; 

    constructor() {
        owner = msg.sender;
    }

    struct Transaction {
        string transactionId;
        string recordID;
        string name;
        string email;
        string phone;
        uint256 amount;
        uint256 date;
        bool statusPayment;
        string ipfsHash;
    }

    struct PaymentGateway {
        string id;
        string extID;
        string paymentMethod;
        bool status;
        uint256 amount;
        string bankCode;
        string paidAt;
        string payerEmail;
        string description;
        string currency;
        string paymentChannel;
    }

    Transaction[] public transaction;
    PaymentGateway[] public pg;

    function storeTransaction(
        string memory _txId,
        string memory _name,
        string memory _email,
        string memory _phone,
        uint256 _amount
    ) public {
        require(msg.sender == owner, "You are not the owner");
        transaction.push(
            Transaction(_txId, "", _name, _email, _phone, _amount, block.timestamp, false, "")
        );
    }

    function storePaymentGatewayRecord(string memory _id,
        string memory _extID,
        string memory _paymentMethod,
        bool _status,
        uint256 _amount,
        string memory _bankCode,
        string memory _paidAt,
        string memory _payerEmail,
        string memory _description,
        string memory _currency,
        string memory _paymentChannel
        ) public {
        require(msg.sender == owner, "You are not the owner");
        pg.push(
            PaymentGateway(
                _id,
                _extID,
                _paymentMethod,
                _status,
                _amount,
                _bankCode,
                _paidAt,
                _payerEmail,
                _description,
                _currency,
                _paymentChannel
            )
        );
    }

    function getTransaction() public view returns (Transaction[] memory) {
        Transaction[] memory result = new Transaction[](transaction.length);
        for (uint256 i = 0; i < transaction.length; i++) {
            result[i] = transaction[i];
        }
        return result;
    }

    function getPaymentGatewayRecord() public view returns (PaymentGateway[] memory) {
        PaymentGateway[] memory result = new PaymentGateway[](pg.length);
        for (uint256 i = 0; i < pg.length; i++) {
            result[i] = pg[i];
        }
        return result;
    }

    function updateIPFS(string memory _txID, string memory _ipfsHash, string memory _recordID) public {
        require(msg.sender == owner, "You are not the owner");
        for (uint256 i = 0; i < transaction.length; i++) {
            if (
                keccak256(abi.encodePacked(transaction[i].transactionId)) ==
                keccak256(abi.encodePacked(_txID))
            ) {
                transaction[i].statusPayment = true;
                transaction[i].ipfsHash = _ipfsHash;
                transaction[i].recordID = _recordID;
                break;
            }
        }
    }

    function verifyFile(string memory _ipfsHash) public view returns (bool) {
        bool valid = false;
        for (uint256 i = 0; i < transaction.length; i++) {
            if (
                keccak256(abi.encodePacked(transaction[i].ipfsHash)) ==
                keccak256(abi.encodePacked(_ipfsHash))
            ) {
                valid = true;
                break;
            }
        }
        return valid;
    }

    function verifyID(string memory _id) public view returns (bool) {
        bool valid = false;
        for (uint256 i = 0; i < transaction.length; i++) {
            if (
                keccak256(abi.encodePacked(transaction[i].recordID)) ==
                keccak256(abi.encodePacked(_id))
            ) {
                valid = true;
                break;
            }
        }
        return valid;
    }

}