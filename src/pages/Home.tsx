import { Box, Center, Button } from "@chakra-ui/react";
import React, { useEffect } from "react";

import EnrollmentInput from "../components/EnrollmentInput";
import { getContract } from "../contract";

function Home() {
  console.log("ijflsjfsljflsdjflksdjflsdjf");
  useEffect(() => {
    alert(window.NDEFReader);
    // alert(new NDEFReader());
    // alert("hekllw ");
    console.log("jklsjflksjflsdjflksjdflsjfl");
    console.log({ window });
    // alert("ksdfklj");
    /*global NDEFReader*/
    try {
      const ndef = new NDEFReader();
      console.log({ ndef });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const enroll = async () => {
    const c = await getContract();
    if (c) {
      c.methods
        .mark_roll("e21cseu0423")
        .send({ from: "0xeEE0895Ab015C146472FBeC5754c3082f62B855f" });
    }
  };
  return (
    <Box width={"100%"} height={"100%"} borderColor={"#6d00af"}>
      <Center>
        <EnrollmentInput />
      </Center>
      <Center>
        <Button
          backgroundColor={"#6d00af"}
          color="white"
          marginTop={"32px"}
          onClick={() => enroll()}
        >
          Enroll Here
        </Button>
      </Center>
    </Box>
  );
}

export default Home;
