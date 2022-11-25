import { Box, Center, Button } from "@chakra-ui/react";
import React from "react";

import EnrollmentInput from "../components/EnrollmentInput";
import { getContract } from "../contract";

function Home() {
  const check_roll = async () => {
    const c = await getContract();
    if (c) {
      c.methods
        .mark_roll("e21cseu0423")
        .send({ from: "0xeEE0895Ab015C146472FBeC5754c3082f62B855f" })
        .check_roll().call();
    }

    
  };
  return (
    <Box width={"100%"} height={"100%"}>
      <Center>
        <EnrollmentInput />
      </Center>
      <Center>
        <Button marginTop={"32px"} onClick={() => check_roll()}>
          Mark Attendance
        </Button><br/>
        <Button marginTop={"32px"} onClick={() => check_roll()}>
          Check Attendance
        </Button>
      </Center>
    </Box>
  );
}

export default Home;
