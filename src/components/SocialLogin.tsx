import { HStack, Divider, VStack, Button, Box, Text } from "@chakra-ui/react";
import { FaComment, FaGithub } from "react-icons/fa";

export default function () {
  return (
    <Box mb={4}>
      <HStack my={8}>
        <Divider />
        <Text
          color={"gray.500"}
          textTransform={"uppercase"}
          fontSize={"xs"}
          as="b"
        >
          Or
        </Text>
        <Divider />
      </HStack>
      <VStack>
        <Button w={"100%"} leftIcon={<FaGithub />} colorScheme={"gray"}>
          Continue with Github
        </Button>
        <Button w={"100%"} leftIcon={<FaComment />} colorScheme={"yellow"}>
          Continue with Kakao
        </Button>
      </VStack>
    </Box>
  );
}
