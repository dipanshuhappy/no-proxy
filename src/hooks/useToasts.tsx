import { useToast } from "@chakra-ui/react";

export function useToasts() {
  const toast = useToast({
    isClosable: true,
    colorScheme: "purple",
    size: "xl",
    duration: 4000,
    variant: "left-accent",
  });
  const successToast = (title: string, description: string) =>
    toast({ title, description });
  const errorToast = (title: string, description: string) =>
    toast({ title, description });
  return {
    successToast,
    errorToast,
  };
}
