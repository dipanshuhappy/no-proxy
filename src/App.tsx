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

function App() {
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
