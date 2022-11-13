import { Box, Center } from "@chakra-ui/react";
import React from "react";
import EnrollmentInput from "../components/EnrollmentInput";

function Home() {
  return (
    <Box width={"100%"} height={"100%"}>
      <Center>
        <EnrollmentInput />
      </Center>
    </Box>
  );
}

export default Home;
