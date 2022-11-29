import { Box, Center, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import EnrollmentInput from "../components/EnrollmentInput";
import { getContract } from "../contract";
import { useToast } from "@chakra-ui/react";
import { readTextRecord } from "../utils";

function Home() {
  // console.log("ijflsjfsljflsdjflksdjflsdjf");
  const [ndefState, setNdefState] = useState<NDEFReader>();
  const toast = useToast();
  useEffect(() => {
    if ("NDEFReader" in window) {
      toast({
        title: "NFC is Supported",
        description: "Press the scan button to take attendance ",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      setNdefState(new NDEFReader());
    } else {
      toast({
        title: "NFC is Not Supported",
        description: "Press the scan button to take attendance ",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  }, []);
  const enroll = async () => {
    try {
      await ndefState?.scan();
      ndefState?.addEventListener("reading", (event) => {
        const message = (event as NDEFReadingEvent).message;
        const text = readTextRecord(message.records[0]);
        console.log({ text });
        toast({
          title: `${text}`,
          description: "Scan read",
          status: "success",
          duration: 3000,
          isClosable: false,
        });
      });
      // if (ndefState) {
      //   ndefState.onreading = ({ message }) => {
      //     console.log({ message });
      //   };
      // }
    } catch (error) {
      toast({
        title: "Error while Scanning",
        description: "Try again later",
        status: "error",
        duration: 3000,
        isClosable: false,
      });
      console.log(error);
    }
  };
  const check_roll = async () => {
    const c = await getContract();
    if (c) {
      c.methods
        .mark_roll("e21cseu0423")
        .send({ from: "0xeEE0895Ab015C146472FBeC5754c3082f62B855f" })
        .check_roll()
        .call();
    }
  };
  return (
    <Box width={"100%"} height={"100%"}>
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
          Start Scan
        </Button>
      </Center>
    </Box>
  );
}

export default Home;
