import {
  VStack,
  Button,
  Grid,
  HStack,
  Box,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaStar, FaRegHeart } from "react-icons/fa";

export default function Room() {
  const gray = useColorModeValue("gray.600", "gray.300");

  return (
    <VStack alignItems={"flex-start"}>
      <Box position={"relative"} mb={2} overflow={"hidden"} rounded={"3xl"}>
        <Image
          minH="280"
          src="https://image.jtbcplus.kr/data/contents/jam_photo/202211/28/29a0347c-b54d-4bbc-934b-1a3e0e9b37c6.jpg"
        />
        <Button
          variant={"unstyled"}
          cursor={"pointer"}
          position={"absolute"}
          top={0}
          right={0}
          color={"white"}
        >
          <FaRegHeart size={"20px"} />
        </Button>
      </Box>
      <Box>
        <Grid gap={2} templateColumns={"6fr 1fr"}>
          <Text as={"b"} fontSize={"md"} noOfLines={1}>
            Address Address AddressAddress
          </Text>
          <HStack _hover={{ color: "yellow.400" }} spacing={1}>
            <FaStar size={15} />
            <Text>5.0</Text>
          </HStack>
        </Grid>

        <Text fontSize={"sm"} color={gray}>
          Gwangju
        </Text>
      </Box>
      <Text fontSize={"sm"} color={gray}>
        <Text as="b">$100</Text>/night
      </Text>
    </VStack>
  );
}
