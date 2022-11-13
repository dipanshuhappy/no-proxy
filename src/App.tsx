import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Web3 from "web3";
import { AbiItem } from "web3-utils";
import Enrollment_Input from "./components/EnrollmentInput";
import EnrollmentInput from "./components/EnrollmentInput";
import { Center } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Details from "./pages/Details";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

const ABI =
  //   inputs: [
  //     {
  //       internalType: "string",
  //       name: "_value",
  //       type: "string",
  //     },
  //   ],
  //   name: "set",
  //   outputs: [],
  //   stateMutability: "nonpayable",
  //   type: "function",
  // },
  // {
  //   inputs: [],
  //   name: "get",
  //   outputs: [
  //     {
  //       internalType: "string",
  //       name: "",
  //       type: "string",
  //     },
  //   ],
  //   stateMutability: "view",
  //   type: "function",

  [
    {
      inputs: [
        {
          internalType: "string",
          name: "_roll",
          type: "string",
        },
      ],
      name: "mark_roll",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_enroll",
          type: "string",
        },
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_batch",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_attendance",
          type: "uint256",
        },
      ],
      name: "Register",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "All_Students",
      outputs: [
        {
          components: [
            {
              internalType: "string",
              name: "enroll",
              type: "string",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "batch",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "attendence",
              type: "uint256",
            },
          ],
          internalType: "struct attendence.Student[]",
          name: "",
          type: "tuple[]",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_roll",
          type: "string",
        },
      ],
      name: "check_roll",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "stud_details",
      outputs: [
        {
          internalType: "string",
          name: "enroll",
          type: "string",
        },
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "batch",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "attendence",
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
          name: "_x",
          type: "string",
        },
      ],
      name: "Student_Details",
      outputs: [
        {
          components: [
            {
              internalType: "string",
              name: "enroll",
              type: "string",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "batch",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "attendence",
              type: "uint256",
            },
          ],
          internalType: "struct attendence.Student",
          name: "",
          type: "tuple",
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
      name: "students1",
      outputs: [
        {
          internalType: "string",
          name: "enroll",
          type: "string",
        },
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "batch",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "attendence",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
