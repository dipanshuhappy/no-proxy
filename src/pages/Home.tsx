import { Box, Center,Button } from "@chakra-ui/react";
import React from "react";
import EnrollmentInput from "../components/EnrollmentInput";

function Home() {
  return (
    <Box width={"100%"} height={"100%"}>
      <Center>
        <EnrollmentInput />
        <Button>Enroll Here</Button>
      </Center>
    </Box>
  );
}

export default Home;
