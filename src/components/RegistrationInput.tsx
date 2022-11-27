import { Input } from "@chakra-ui/input";
import { Heading, Box, Text, Stack, VStack, Button } from "@chakra-ui/react";
import React from "react";
import { getContract } from "../contract";
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

function RegistrationInput()
{
  // const register = async () => {
  // const c = await getContract();
  //   if (c) {
  //     c.methods
  //       ._enroll("e21cseu0423")
  //       ._name("nithin")
  //       ._batch(20)
  //       ._attendance(0)
  //       .send({ from: "0xeEE0895Ab015C146472FBeC5754c3082f62B855f" });
  //   }
  // };
  return (
    <Box p={5} shadow="2xl" borderWidth="1px">
      <VStack spacing={8} direction="row">
        <Feature
          title="Enter Your Attendance "
          desc="Enter Your Attendance By Simply Putting Your Enrollment Number . "
        />
        <Input placeholder="Enrollment number" size="lg" variant={"filled"} />
        <Button marginTop={"32px"} onClick={() => enroll()}>
          Enroll Here
        </Button>
      </VStack>
    </Box>
    
  );
}


export default RegistrationInput;

function enroll(): void {
  throw new Error("Function not implemented.");
}
