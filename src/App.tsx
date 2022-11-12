import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Web3 from "web3";
import { AbiItem } from "web3-utils";
const ABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_value",
        type: "string",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "get",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
function App() {
  const [count, setCount] = useState(0);
  const callContract = async () => {
    const web3 = new Web3(
      // @ts-ignore
      window.ethereum
    );
    // @ts-ignore
    await window.ethereum.enable();
    const NameContract = new web3.eth.Contract(
      ABI as AbiItem[],
      "0x2E9F313dE815a503944008bb5cf03A96d5AB6DE7"
    );
    //@ts-ignore
    console.log(await NameContract.methods.get().call());
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => callContract()}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
