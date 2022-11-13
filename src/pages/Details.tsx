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
import { Heading, Box, Text, Stack, VStack, Button, ListItem, OrderedList, Center, List } from "@chakra-ui/react";
import React, { useState } from "react";
import { getContract } from "../contract";
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

function Details() {
  const [studentsArray, setStudentsArray] = useState([] as any[])
  const Details = async () => {
    const x = await getContract();

   

    if (x) {
      let i = 0;
      console.log("in the if of x")
      let student = {};
      // let studentsArray: {}[] = []
      while (student != undefined) {
        console.log("jksdflsdjf;;l")
        await x.methods.stud_details(i).call(
          function (err: any, res: any) {
            student = res;
            //@ts-ignore
            i++;
          }
        )
       
        if(student==undefined){
          break
        }
        setStudentsArray([...studentsArray, student])

        console.log(student)
        
      }
      // x.methods.stud_details(8).call(
      //   function(err:any,res:any){
      //     console.log({res})

      //   }
      // )
      // setStudentsArray(studentsArray.filter((i)=>i!=undefined))
      console.log({ studentsArray })
      // ._name("nithin")
      // ._batch(20)
      // ._attendance(0)

      // .send({ from: "0xeEE0895Ab015C146472FBeC5754c3082f62B855f" });
      // console.log({a})
    }
  };
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
          {
            studentsArray.map(
              (student:any,index)=>
              <ListItem key={index}>
               Id: {student.enroll} , Name : {student.name} , batch : {student.batch} , attendance : {student.attendace}
              </ListItem>
              )
          }
        </OrderedList>



        <Input placeholder="Enrollment number" size="lg" variant={"filled"} />

        <Center>
          <Button marginTop={"32px"} onClick={ async () => await Details()}>
            Get Student Details
          </Button>
        </Center>

      </VStack>
    </Box>

  );
}


export default Details;