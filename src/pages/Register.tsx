// import React from "react";

// function Register() {
//   return <div>sjdflslfl</div>;
// }

// export default Register;

import { Input } from "@chakra-ui/input";
import { Heading, Box, Text, Stack, VStack } from "@chakra-ui/react";
import React from "react";
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
      </VStack>
    </Box>
    
  );
}


export default Register;