import Web3 from "web3";
import { AbiItem } from "web3-utils";
import { Contract } from "web3-eth-contract";

const ABI = 
[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_roll",
				"type": "string"
			}
		],
		"name": "mark_roll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_enroll",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_batch",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_attendance",
				"type": "uint256"
			}
		],
		"name": "Register",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "All_Students",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "enroll",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "batch",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "attendence",
						"type": "uint256"
					}
				],
				"internalType": "struct attendence.Student[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Array_Size",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_roll",
				"type": "string"
			}
		],
		"name": "check_roll",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "stud_details",
		"outputs": [
			{
				"internalType": "string",
				"name": "enroll",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "batch",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "attendence",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_x",
				"type": "string"
			}
		],
		"name": "Student_Details",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "enroll",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "batch",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "attendence",
						"type": "uint256"
					}
				],
				"internalType": "struct attendence.Student",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "students1",
		"outputs": [
			{
				"internalType": "string",
				"name": "enroll",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "batch",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "attendence",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
let contract: Contract | null = null;let run = false;
export const getContract = async () => {
  if (!run) {
    const web3 = new Web3(
      // @ts-ignore
      window.ethereum
    );
    //@ts-ignore

    await window.ethereum.enable();
    contract = new web3.eth.Contract(
      ABI as AbiItem[],
      "0xe3c875d373902d421a57ad813ad2fe3d2aafab13"
    );
    run=true;
  }
  return contract;
};