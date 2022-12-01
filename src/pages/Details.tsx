// import React from "react";

// function Details() {
//   return <div>jsldfj</div>;
// }

// export default Details;

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
  Button,
  ListItem,
  OrderedList,
  Center,
  List,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { getContract, getWeb3 } from "../contract";
type FeatureProp = {
  title?: string;
  desc?: string;
};

function Feature({ title, desc }: FeatureProp) {
  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
}

function Details() {
  const [studentsArray, setStudentsArray] = useState([] as any[]);
  const [sessionId, setSessionId] = useState("");
  useEffect(() => {
    if (sessionId.length != 0 && sessionId.length == 5) {
      getContract().then((value) => {
        if (value) {
          value.events.trigger_attendance.on("data", function (event: any) {
            console.log({ event });
            setStudentsArray(event.returnValues.student_details);
          });
        }
      });
    }
  }, [sessionId]);
  const details = async () => {
    // setStudentsArray([])
    const contract = await getContract();
    if (contract) {
      const array = await contract.methods
        .get_session_students(sessionId)
        .call();
      console.log({ array });
      setStudentsArray(array);
    }
  };
  return (
    <Box p={5} shadow="2xl" borderWidth="1px">
      <VStack spacing={8} direction="row">
        <Feature
          title="Student Details"
          desc="Details of every Students who Registered."
        />
        <Input
          placeholder="Session ID"
          size="lg"
          onChange={(event) => {
            setSessionId(event.target.value);
          }}
          variant={"filled"}
        />

        <OrderedList>
          {studentsArray.map((Student: any, index) => (
            <ListItem key={index}>{Student}</ListItem>
          ))}
        </OrderedList>
        {/* <p>
          {JSON.stringify(
             
        </p> */}

        {/* <Input placeholder="Enrollment number" size="lg" variant={"filled"} /> */}

        <Center>
          <Button
            backgroundColor={"#6d00af"}
            color="white"
            marginTop={"32px"}
            onClick={details}
          >
            Get Student Details
          </Button>
        </Center>
      </VStack>
    </Box>
  );
}

export default Details;
