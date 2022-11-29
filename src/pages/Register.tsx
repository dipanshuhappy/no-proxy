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
import { getContract } from "../contract";
type FeatureProp = {
  title?: string;
  desc?: string;
};

function Feature({ title, desc }: FeatureProp) {
  return (
    <Box p={5} borderWidth="1px">
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
}

function Register() {
  const [name, setName] = useState("");
  const [enroll, setenroll] = useState("");
  const [batch, setbatch] = useState(0);
  const [attendance, setattendance] = useState(0);
  const Register = async () => {
    const x = await getContract();
    if (x) {
      await x.methods
        .Register(enroll, name, batch, attendance)
        .send({ from: "0xeEE0895Ab015C146472FBeC5754c3082f62B855f" });
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
        <Input
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
        />

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
