const contractABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "string",
        "name": "sha_256",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "md5",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "flagged_malicious",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "file_type",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "size",
        "type": "uint64"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "last_analysis",
        "type": "string"
      }
    ],
    "name": "AnalysisStored",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "stopContract",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "resumeContract",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "sha_256",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "md5",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "flagged_malicious",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "file_type",
        "type": "string"
      },
      {
        "internalType": "uint64",
        "name": "size",
        "type": "uint64"
      },
      {
        "internalType": "string",
        "name": "last_analysis",
        "type": "string"
      }
    ],
    "name": "storeAnalysis",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "sha_256",
        "type": "string"
      }
    ],
    "name": "retrieveAnalysis",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "sha_256",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "md5",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "flagged_malicious",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "file_type",
        "type": "string"
      },
      {
        "internalType": "uint64",
        "name": "size",
        "type": "uint64"
      },
      {
        "internalType": "string",
        "name": "last_analysis",
        "type": "string"
      }
    ],
    "name": "storeAnalysisOwner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "sha_256",
        "type": "string"
      }
    ],
    "name": "retrieveAnalysisOwner",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
]