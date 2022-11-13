// import React from "react";

// function Register() {
//   return <div>sjdflslfl</div>;
// }

// export default Register;

import { Input } from "@chakra-ui/input";
import { Heading, Box, Text, Stack, VStack, Center, Button } from "@chakra-ui/react";
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

function Register()
{
  const Register = async () => {
    const x = await getContract();
      if (x) {
        x.methods
          .Register("e21cseu0423","nithin",20,0)
          // ._name("nithin")
          // ._batch(20)
          // ._attendance(0)
          .send({ from: "0xeEE0895Ab015C146472FBeC5754c3082f62B855f" });
      }
    };
  return (
    <Box p={5} shadow="2xl" borderWidth="1px">
      <VStack spacing={8} direction="row">
        <Feature
          title="Registration "
          desc="Register Here By Entering Student Details "
        />
        <Input placeholder="Enrollment number" size="lg" variant={"filled"} />
        <Input placeholder="Student Name" size="lg" variant={"filled"} />
        <Input placeholder="Batch" size="lg" variant={"filled"} />
        <Input placeholder="Attendance" size="lg" variant={"filled"} />
        
        <Center>
        <Button marginTop={"32px"} onClick={async () => await Register()}>
          Register Here
        </Button>
      </Center>
      
      </VStack>
    </Box>
    
  );
}


export default Register;