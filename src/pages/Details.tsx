// import React from "react";

// function Details() {
//   return <div>jsldfj</div>;
// }

// export default Details;


// import React from "react";

// function Register() {
//   return <div>sjdflslfl</div>;
// }

// export default Register;

import { Input } from "@chakra-ui/input";
import { Heading, Box, Text, Stack, VStack, Button, ListItem, OrderedList} from "@chakra-ui/react";
import React from "react";
type FeatureProp = {
  title?: string;
  desc?: string;
};

function Feature({ title, desc }: FeatureProp) {
    return (
      <Box p={5} shadow="md" borderWidth="1px">
        <Heading fontSize="xl">{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>
    );
  }

function Student_Details()
{
  return (
    <Box p={5} shadow="2xl" borderWidth="1px">
      <VStack spacing={8} direction="row">
        <Feature
          title="Student Details"
          desc="Details of every Students who Registered."
        />
        {/* <Input placeholder="Enrollment number" size="lg" variant={"filled"} />
        <Input placeholder="Student Name" size="lg" variant={"filled"} />
        <Input placeholder="Batch" size="lg" variant={"filled"} />
        <Input placeholder="Attendance" size="lg" variant={"filled"} /> */}
        {/* <Button></Button> */}
        <OrderedList>
      <ListItem>Lorem ipsum dolor sit amet</ListItem>
      <ListItem>Consectetur adipiscing elit</ListItem>
      <ListItem>Integer molestie lorem at massa</ListItem>
      <ListItem>Facilisis in pretium nisl aliquet</ListItem>
      </OrderedList>
      </VStack>
    </Box>
    
  );
}


export default Student_Details;