import { Heading, VStack, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <VStack bg={"green.100"} justifyContent={"center"} minH="50vh">
      <Heading>Page Not Found</Heading>
      <Text>It seems that you're lost.</Text>
      <Link to={"/"}>
        <Button variant={"link"} colorScheme={"facebook"}>
          Go home &rarr;{" "}
        </Button>
      </Link>
    </VStack>
  );
}
