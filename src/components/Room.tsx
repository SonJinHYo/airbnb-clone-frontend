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
import { FaStar, FaRegHeart, FaCamera } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

interface IRoomProps {
  pk: number;
  imageUrl: string;
  name: string;
  rating: number;
  city: string;
  country: string;
  price: number;
  isOwner: boolean;
}

export default function Room({
  pk,
  imageUrl,
  name,
  rating,
  city,
  country,
  price,
  isOwner,
}: IRoomProps) {
  const gray = useColorModeValue("gray.600", "gray.300");
  const navigate = useNavigate();
  const onCameraClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate(`/rooms/${pk}/photos`);
  };

  return (
    <Link to={`/rooms/${pk}`}>
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
            onClick={onCameraClick}
          >
            {isOwner ? (
              <FaCamera size={"20px"} />
            ) : (
              <FaRegHeart size={"20px"} />
            )}
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
    </Link>
  );
}
