import { Input } from "@chakra-ui/input";
import { ColorModeScript } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react'
import {
  Heading,
  Box,
  Text,
  Stack,
  VStack,
  useBreakpointValue,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
  color,
} from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.png";
// import React from 'react';
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
// import React from 'react';

function NavBar() {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box as="section" pb={{ base: "12", md: "24" }}>
      <Box
        as="nav"
        bg="#6d00af"

        boxShadow={useColorModeValue("sm", "sm-dark")}
        
      >
        <Container py={{ base: "4", lg: "5" }}>
          <HStack spacing="3">
            <img
              src={logo}
              height="50px"
              width="50px"
              style={{
                position: "relative",
                right: "100%"
            }}/>
            {
            // isDesktop ? (
              <Flex justify="space-between" flex="1">
                <ButtonGroup
                  variant="link"
                  spacing="6"
                  style={{
                    position: "relative",
                    right: "80%",
                  }}
                >
                  <text color="Black">
                    <b>No Proxy</b>
                  </text>
                </ButtonGroup>
                <HStack spacing="8">
                <Button variant="ghost">
                    <Link to={"/home"}>Home</Link>
                  </Button>
                  <Button variant="ghost">
                    <Link to={"/register"}>Register</Link>
                  </Button>
                  <Button variant="ghost">
                    <Link to={"/details"}>Student Details</Link>
                  </Button>
                  <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? 'Dark' : 'Light'}
                  </Button>
                </HStack>
              </Flex>
           // ) : (
            //   // <IconButton
            //   //   variant="ghost"
            //   //   icon={<FiMenu fontSize="1.25rem" />}
            //   //   aria-label="Open Menu"
            //   // />
            // )
            }
          </HStack>
        </Container>
      </Box>
    </Box>
  );
}

export default NavBar;
