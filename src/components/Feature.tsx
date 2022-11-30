import { Box, Heading, Text } from "@chakra-ui/react";
type FeatureProp = {
  title?: string;
  desc?: string;
};
export function Feature({ title, desc }: FeatureProp) {
  return (
    <Box p={5} borderWidth="1px">
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
}
