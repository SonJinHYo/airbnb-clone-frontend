import { HStack, Divider, VStack, Button, Box, Text } from "@chakra-ui/react";
import { FaComment, FaGithub } from "react-icons/fa";

export default function () {
  const kakaoParams = {
    client_id: "44712cde600e3795fe99e54f495f49c5",
    redirect_uri: "http://127.0.0.1:3000/social/kakao",
    response_type: "code",
  };
  const params = new URLSearchParams(kakaoParams).toString();
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
        <Button
          as={"a"}
          href="https://github.com/login/oauth/authorize?client_id=4e0c6dff81e6079bc9a9&scope=read:user,user:email"
          w={"100%"}
          leftIcon={<FaGithub />}
          colorScheme={"gray"}
        >
          Continue with Github
        </Button>
        <Button
          as={"a"}
          href={`https://kauth.kakao.com/oauth/authorize?${params}`}
          w={"100%"}
          leftIcon={<FaComment />}
          colorScheme={"yellow"}
        >
          Continue with Kakao
        </Button>
      </VStack>
    </Box>
  );
}
