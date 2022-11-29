import { defineStyleConfig } from "@chakra-ui/react";
import { primaryColor } from "./colors";

export const Box = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    borderColor: primaryColor,
  },
});
