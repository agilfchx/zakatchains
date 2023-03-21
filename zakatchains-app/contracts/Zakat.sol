// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.7;

contract Zakat {
    uint256 currentTime;
    address owner;

    constructor() {
        owner = msg.sender;
    }

    struct ZakatIVC {
        address walletAddress;
        string zakatID;
        string name;
        string email;
        string phoneNum;
        uint256 amount;
        uint256 date;
        bool statusPayment;
        string ipfsHash;
    }

    struct PG {
        string _id;
        string _extID;
        string _paymentMethod;
        bool _status;
        uint256 _amount;
        string _bankCode;
        string _paidAt;
        string _payerEmail;
        string _description;
        string _currency;
        string _paymentChannel;
    }

    ZakatIVC[] public zvoice;
    PG[] public pg;

    // Zakat Invoice Struct
    function store(
        string memory _zakatID,
        string memory _name,
        string memory _email,
        string memory _phoneNum,
        uint256 _amount
    ) public {
        // bool status = checkPayment(msg.sender);
        // require(status == true, "Tunggu bulan berikutnya");
        zvoice.push(
            ZakatIVC(
                msg.sender,
                _zakatID,
                _name,
                _email,
                _phoneNum,
                _amount,
                block.timestamp,
                false,
                ""
            )
        );
    }

    function updateIPFS(string memory _zakatID, string memory _ipfsHash)
        public
    {
        require(msg.sender == owner, "Anda tidak memiliki akses");
        for (uint256 i = 0; i < zvoice.length; i++) {
            if (
                keccak256(abi.encodePacked(zvoice[i].zakatID)) ==
                keccak256(abi.encodePacked(_zakatID))
            ) {
                zvoice[i].statusPayment = true;
                zvoice[i].ipfsHash = _ipfsHash;
                break;
            }
        }
    }

    function getZakat() public view returns (ZakatIVC[] memory) {
        ZakatIVC[] memory result = new ZakatIVC[](zvoice.length);
        for (uint256 i = 0; i < zvoice.length; i++) {
            result[i] = zvoice[i];
        }
        return result;
    }

    function getHistory(address _walletAddress)
        public
        view
        returns (
            string[] memory,
            uint256[] memory,
            uint256[] memory,
            string[] memory
        )
    {
        uint256 count = 0;
        for (uint256 j = 0; j < zvoice.length; j++) {
            if (zvoice[j].walletAddress == _walletAddress) {
                count++;
            }
        }
        string[] memory _zakatID = new string[](count);
        string[] memory _ipfsHash = new string[](count);
        uint256[] memory _date = new uint256[](count);
        uint256[] memory _amount = new uint256[](count);
        uint256 i = 0;
        for (uint256 j = 0; j < zvoice.length; j++) {
            if (zvoice[j].walletAddress == _walletAddress) {
                _zakatID[i] = zvoice[j].zakatID;
                _date[i] = zvoice[j].date;
                _amount[i] = zvoice[j].amount;
                _ipfsHash[i] = zvoice[j].ipfsHash;
                i++;
            }
        }
        return (_zakatID, _date, _amount, _ipfsHash);
    }

    // Payment Gateway Struct
    function storePG(
        string memory _id,
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
        require(msg.sender == owner, "Anda tidak memiliki akses");
        pg.push(
            PG(
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

    function getPG() public view returns (PG[] memory) {
        PG[] memory result = new PG[](pg.length);
        for (uint256 i = 0; i < pg.length; i++) {
            result[i] = pg[i];
        }
        return result;
    }

    // ETC
    function checkPayment(address _walletAddress) public view returns (bool) {
        uint256 lastPayment = 0;
        uint256 oneMonthInSeconds = 2592000; // 30 d x 24 h x 60 m x 60 s
        for (uint256 i = 0; i < zvoice.length; i++) {
            if (zvoice[i].walletAddress == _walletAddress) {
                if (zvoice[i].date > lastPayment) {
                    lastPayment = zvoice[i].date;
                }
            }
        }
        return (block.timestamp - lastPayment >= oneMonthInSeconds);
    }

    function verifyFile(string memory _ipfsHash) public view returns (bool) {
        bool valid = false;
        for (uint256 i = 0; i < zvoice.length; i++) {
            if (
                keccak256(abi.encodePacked(zvoice[i].ipfsHash)) ==
                keccak256(abi.encodePacked(_ipfsHash))
            ) {
                valid = true;
                break;
            }
        }
        return valid;
    }
}
