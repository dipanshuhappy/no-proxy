import { Box, Center,Button } from "@chakra-ui/react";
import React from "react";
import EnrollmentInput from "../components/EnrollmentInput";

function Home() {
  return (
    <Box width={"100%"} height={"100%"}>
      <Center>
        <EnrollmentInput />
       
      </Center>
      <center><Button marginTop={"32px"}>Enroll Here</Button></center>
    </Box>
  );
}

export default Home;
