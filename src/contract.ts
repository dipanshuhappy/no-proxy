import Web3 from "web3";
import { AbiItem } from "web3-utils";
import { Contract } from "web3-eth-contract";

const ABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_s_id",
        type: "string",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_faculty_id",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_password",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_start_time",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_end_time",
        type: "uint256",
      },
    ],
    name: "create_session",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_s_id",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_password",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_st_id",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "current_time",
        type: "uint256",
      },
    ],
    name: "mark_attendance",
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
        name: "_name",
        type: "string",
      },
    ],
    name: "register_faculty",
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
        name: "_name",
        type: "string",
      },
    ],
    name: "register_student",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "faculty_details",
    outputs: [
      {
        internalType: "string",
        name: "id",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_s_id",
        type: "string",
      },
    ],
    name: "get_session_students",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "session_details",
    outputs: [
      {
        internalType: "string",
        name: "s_id",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        components: [
          {
            internalType: "string",
            name: "id",
            type: "string",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
        ],
        internalType: "struct Attendance.Faculty",
        name: "faculty",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "password",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "start_time",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "end_time",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "student_details",
    outputs: [
      {
        internalType: "string",
        name: "id",
        type: "string",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
let contract: Contract | null = null;
let run = false;
let web3 = new Web3();
export const getContract = async () => {
  if (!run) {
    web3 = new Web3(
      // @ts-ignore
      window.ethereum
    );
    //@ts-ignore

    await window.ethereum.enable();
    contract = new web3.eth.Contract(
      ABI as AbiItem[],
      "0xacdaeAecf6e98b9ECB01c8d007d3eff42E6bb179"
    );
    run = true;
  }
  return contract;
};
export const getWeb3 = () => web3;
export const getAddress = async () => (await getWeb3().eth.getAccounts())[0];
