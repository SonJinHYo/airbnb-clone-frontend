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

interface IRoomProps {
  imageUrl: string;
  name: string;
  rating: number;
  city: string;
  country: string;
  price: number;
}

export default function Room({
  imageUrl,
  name,
  rating,
  city,
  country,
  price,
}: IRoomProps) {
  const gray = useColorModeValue("gray.600", "gray.300");

  return (
    <VStack alignItems={"flex-start"}>
      <Box position={"relative"} mb={2} overflow={"hidden"} rounded={"3xl"}>
        <Image minH="280" src={imageUrl} />
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
          <Text display={"block"} as={"b"} fontSize={"md"} noOfLines={1}>
            {name}
          </Text>
          <HStack _hover={{ color: "yellow.400" }} spacing={1}>
            <FaStar size={15} />
            <Text>{rating}</Text>
          </HStack>
        </Grid>

        <Text fontSize={"sm"} color={gray}>
          {city}, {country}
        </Text>
      </Box>
      <Text fontSize={"sm"} color={gray}>
        <Text as="b">${price}</Text>/night
      </Text>
    </VStack>
  );
}
