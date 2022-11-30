import { Box, Button, Center, Input, useToast, VStack } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import Web3 from "web3";
import { Feature } from "../components/Feature";
import { getAddress, getContract, getWeb3 } from "../contract";
import { useToasts } from "../hooks/useToasts";

function RegisterFaculty() {
  const [name, setName] = useState("");

  const [loading, setLoading] = useState(false);
  const { successToast, errorToast } = useToasts();

  const register = async () => {
    setLoading(true);
    const contract = await getContract();
    const id = nanoid(10);
    console.log({ contract });

    const address = await getAddress();
    console.log({ id });
    if (contract) {
      await contract.methods
        .register_faculty(id, name)
        .send({ from: address })
        .then((receipt: any) => {
          console.log(receipt);
          successToast(
            "Registration Done ",
            `Faculty Registered with id ${id}`
          );
        });
    }
    setLoading(false);
  };
  return (
    <Box p={"12"} width={"100%"} height={"100%"}>
      <VStack spacing={8} direction="row">
        <Feature
          title="Registration Of Faculty"
          desc="Register By Entering Faculty Name"
        />
        <Input
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
          placeholder="Full Name"
          size="lg"
          variant={"filled"}
        />

        <Center>
          <Button
            backgroundColor={"#6d00af"}
            color="white"
            marginTop={"32px"}
            isLoading={loading}
            loadingText={"Please wait for transaction to complete"}
            onClick={async () => await register()}
          >
            Register Here
          </Button>
        </Center>
      </VStack>
    </Box>
  );
}

export default RegisterFaculty;
