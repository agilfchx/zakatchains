export const Zakat = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "pg",
    outputs: [
      {
        internalType: "string",
        name: "id",
        type: "string",
      },
      {
        internalType: "string",
        name: "extID",
        type: "string",
      },
      {
        internalType: "string",
        name: "paymentMethod",
        type: "string",
      },
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "bankCode",
        type: "string",
      },
      {
        internalType: "string",
        name: "paidAt",
        type: "string",
      },
      {
        internalType: "string",
        name: "payerEmail",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "currency",
        type: "string",
      },
      {
        internalType: "string",
        name: "paymentChannel",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transaction",
    outputs: [
      {
        internalType: "string",
        name: "transactionId",
        type: "string",
      },
      {
        internalType: "string",
        name: "recordID",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "email",
        type: "string",
      },
      {
        internalType: "string",
        name: "phone",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "date",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "statusPayment",
        type: "bool",
      },
      {
        internalType: "string",
        name: "ipfsHash",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_txId",
        type: "string",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_email",
        type: "string",
      },
      {
        internalType: "string",
        name: "_phone",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "storeTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_id",
        type: "string",
      },
      {
        internalType: "string",
        name: "_extID",
        type: "string",
      },
      {
        internalType: "string",
        name: "_paymentMethod",
        type: "string",
      },
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_bankCode",
        type: "string",
      },
      {
        internalType: "string",
        name: "_paidAt",
        type: "string",
      },
      {
        internalType: "string",
        name: "_payerEmail",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "string",
        name: "_currency",
        type: "string",
      },
      {
        internalType: "string",
        name: "_paymentChannel",
        type: "string",
      },
    ],
    name: "storePaymentGatewayRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getTransaction",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "transactionId",
            type: "string",
          },
          {
            internalType: "string",
            name: "recordID",
            type: "string",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "email",
            type: "string",
          },
          {
            internalType: "string",
            name: "phone",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "date",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "statusPayment",
            type: "bool",
          },
          {
            internalType: "string",
            name: "ipfsHash",
            type: "string",
          },
        ],
        internalType: "struct TransactionRecord.Transaction[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "getPaymentGatewayRecord",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "id",
            type: "string",
          },
          {
            internalType: "string",
            name: "extID",
            type: "string",
          },
          {
            internalType: "string",
            name: "paymentMethod",
            type: "string",
          },
          {
            internalType: "bool",
            name: "status",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "bankCode",
            type: "string",
          },
          {
            internalType: "string",
            name: "paidAt",
            type: "string",
          },
          {
            internalType: "string",
            name: "payerEmail",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "currency",
            type: "string",
          },
          {
            internalType: "string",
            name: "paymentChannel",
            type: "string",
          },
        ],
        internalType: "struct TransactionRecord.PaymentGateway[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_txID",
        type: "string",
      },
      {
        internalType: "string",
        name: "_ipfsHash",
        type: "string",
      },
      {
        internalType: "string",
        name: "_recordID",
        type: "string",
      },
    ],
    name: "updateIPFS",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_ipfsHash",
        type: "string",
      },
    ],
    name: "verifyFile",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_id",
        type: "string",
      },
    ],
    name: "verifyID",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
];
