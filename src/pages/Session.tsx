import {
  VStack,
  Input,
  Center,
  Button,
  Box,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import useLocalStorage from "react-use-localstorage";
import SimpleCrypto from "simple-crypto-js";
import { Feature } from "../components/Feature";
import { FACULTY, PRIVATE_KEY, SESSION } from "../contants";
import { getAddress, getContract } from "../contract";
import { useToasts } from "../hooks/useToasts";

function Session() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [start, setStart] = useState("00:00");
  const [end, setEnd] = useState("01:00");
  const [loading, setLoading] = useState(false);
  const [facultyId] = useLocalStorage(FACULTY, "null");
  const [sessionId, setSessionId] = useLocalStorage(SESSION, "null");
  const { successToast, errorToast } = useToasts();
  const [showNFC, setShowNFC] = useState(false);
  const [ndefState, setNdefState] = useState<NDEFReader>();

  const [id, setId] = useState("");
  useEffect(() => {
    if ("NDEFReader" in window) {
      successToast(
        "NFC is  Supported",
        "Press the scan button to take attendance "
      );
      setNdefState(new NDEFReader());
    } else {
      // toast({
      //   title: "NFC is Not Supported",
      //   description: "Press the scan button to take attendance ",
      //   status: "error",
      //   duration: 2000,
      //   isClosable: true,
      // });
      errorToast(
        "NFC is Not Supported",
        "Press the scan button to take attendance "
      );
    }
  }, []);
  const createSession = async () => {
    setLoading(true);
    const contract = await getContract();
    const newSessionID = nanoid(5);
    setId(newSessionID);
    const nowStart = new Date();
    const nowEnd = new Date();
    nowStart.setHours(parseInt(start.split(":")[0]));
    nowStart.setMinutes(parseInt(start.split(":")[1]));
    nowEnd.setHours(parseInt(end.split(":")[0]));
    nowEnd.setMinutes(parseInt(end.split(":")[1]));

    console.log({ contract });
    console.log(
      newSessionID,
      name,
      facultyId,
      parseInt(password),
      nowStart.getTime(),
      nowEnd.getTime()
    );
    const address = await getAddress();
    console.log({ id });
    if (contract) {
      await contract.methods
        .create_session(
          newSessionID,
          name,
          facultyId,
          parseInt(password),
          nowStart.getTime(),
          nowEnd.getTime()
        )
        .send({ from: address })
        .then((receipt: any) => {
          console.log(receipt);
          setSessionId(id);
          setShowNFC(true);
          successToast(
            "Registration Done ",
            `Session Registered with id ${id}`
          );
        });
    }
    setLoading(false);
  };
  const startScan = async () => {
    const crypto = new SimpleCrypto(PRIVATE_KEY);
    // const cipher = crypto.encrypt(`${id}#${password}`);
    // console.log({ cipher });
    console.log(`${id}#${password}`);
    if ("NDEFReader" in window) {
      successToast(
        "NFC is  Supported",
        "Press the scan button to take attendance "
      );

      await ndefState
        ?.write(`${id}#${password}`)
        .then(() => {
          successToast(`NFC  is written  ${id}#${password}`, "");
        })
        .catch(console.log);
    } else {
      errorToast("NFC is Not Supported", "Use A NFC Supported Device");
    }
  };
  return (
    <Box p={"12"} width={"100%"} height={"100%"}>
      <VStack spacing={8} direction="row">
        <Feature
          title="Create An Attendance Session Here"
          desc="Enter Session Details ..."
        />
        <Input
          onChange={(e) => setName(e.target.value)}
          placeholder="Session Name"
          size="lg"
          value={name}
          variant={"filled"}
        />
        <InputGroup size="md">
          <Input
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            maxLength={5}
            inputMode="numeric"
            pr="4.5rem"
            type={show ? "number" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Text textAlign={"left"} float="left" alignSelf={"normal"}>
          Start Time :
        </Text>
        <Input
          onChange={(event) => setStart(event.target.value)}
          value={start}
          placeholder="Start Time"
          size="lg"
          type={"time"}
        />

        <Text textAlign={"left"} float="left" alignSelf={"normal"}>
          Ent Time :
        </Text>
        <Input
          onChange={(event) => setEnd(event.target.value)}
          value={end}
          placeholder="End Time"
          size="lg"
          type={"time"}
        />

        <Center>
          <Button
            backgroundColor={"#6d00af"}
            color="white"
            marginTop={"32px"}
            onClick={async () => await createSession()}
          >
            Create Session
          </Button>
        </Center>
        {showNFC && (
          <Center>
            <Button
              variant={"outline"}
              color="white"
              marginTop={"32px"}
              onClick={async () => await startScan()}
            >
              Write To Tag
            </Button>
          </Center>
        )}
      </VStack>
    </Box>
  );
}

export default Session;
