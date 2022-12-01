import { Box, Center, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import EnrollmentInput from "../components/EnrollmentInput";
import { getAddress, getContract } from "../contract";
import { useToast } from "@chakra-ui/react";
import { readTextRecord } from "../utils";
import SimpleCrypto from "simple-crypto-js";
import { PRIVATE_KEY, STUDENT } from "../contants";
import { useToasts } from "../hooks/useToasts";
import useLocalStorage from "react-use-localstorage";

function Home() {
  // console.log("ijflsjfsljflsdjflksdjflsdjf");
  const [ndefState, setNdefState] = useState<NDEFReader>();
  const toast = useToast();
  const { successToast, errorToast } = useToasts();
  const [studentId, setStudentId] = useLocalStorage(STUDENT, "null");
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
      ndefState?.addEventListener("reading", async (event) => {
        const message = (event as NDEFReadingEvent).message;
        const text = readTextRecord(message.records[0]);
        // const crypto = new SimpleCrypto(PRIVATE_KEY);
        // const text = crypto.decrypt(cipher);
        const sessionId = text.toString().split("#")[0];
        const password = text.toString().split("#")[1];
        const contract = await getContract();
        const address = await getAddress();
        if (contract) {
          await contract.methods
            .mark_attendance(
              sessionId,
              parseInt(password),
              studentId,
              new Date().getTime()
            )
            .send({ from: address })
            .then((receipt: any) => {
              console.log(receipt);
              successToast(
                "Attendance Done ",
                `Attendace Registered with ${sessionId}`
              );
            });
        }
      });
      // await ndefState
      //   ?.write("Test this is")
      //   .then(() => {
      //     successToast(`NFC  is writ4v ten  test worked`, "");
      //   })
      //   .catch(console.log);
      // });
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
