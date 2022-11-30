// import React from "react";

// function Register() {
//   return <div>sjdflslfl</div>;
// }

// export default Register;

import { Input } from "@chakra-ui/input";
import {
  Heading,
  Box,
  Text,
  Stack,
  VStack,
  Center,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import useLocalStorage from "react-use-localstorage";
import { Feature } from "../components/Feature";
import { STUDENT } from "../contants";
import { getAddress, getContract } from "../contract";
import { useToasts } from "../hooks/useToasts";

function Register() {
  const [name, setName] = useState("");
  const [enroll, setenroll] = useState("");
  const [studentId, setStudentId] = useLocalStorage(STUDENT, "null");
  // const [batch, setbatch] = useState(0);
  // const [attendance, setattendance] = useState(0);
  const Register = async () => {
    const x = await getContract();
    const address = await getAddress();
    const { successToast, errorToast } = useToasts();

    if (x) {
      await x.methods
        .register_student(enroll, name)
        .send({ from: address })
        .then((receipt: any) => {
          console.log(receipt);
          setStudentId(enroll);
          successToast(
            "Registration Done ",
            `Student Registered with id ${enroll}`
          );
        });
    }
  };
  return (
    <Box p={"12"} width={"100%"} height={"100%"}>
      <VStack spacing={8} direction="row">
        <Feature
          title="Registration "
          desc="Register Here By Entering Student Details "
        />
        <Input
          onChange={(e: any) => setenroll(e.currentTarget.value)}
          placeholder="Enrollment number"
          size="lg"
          variant={"filled"}
        />
        <Input
          onChange={(e: any) => setName(e.currentTarget.value)}
          placeholder="Student Name"
          size="lg"
          variant={"filled"}
        />
        {/* <Input
          onChange={(e: any) => setbatch(parseInt(e.currentTarget.value))}
          placeholder="Batch"
          size="lg"
          variant={"filled"}
        />
        <Input
          onChange={(e: any) => setattendance(parseInt(e.currentTarget.value))}
          placeholder="Attendance"
          size="lg"
          variant={"filled"}
        /> */}

        <Center>
          <Button
            backgroundColor={"#6d00af"}
            color="white"
            marginTop={"32px"}
            onClick={async () => await Register()}
          >
            Register Here
          </Button>
        </Center>
      </VStack>
    </Box>
  );
}

export default Register;
