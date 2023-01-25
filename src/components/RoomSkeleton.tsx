import { Box, HStack, Skeleton } from "@chakra-ui/react";

export default function RoomSkeleton() {
  return (
    <Box>
      <Skeleton height={"280px"} rounded="2xl" mb={7} />
      <HStack justifyContent={"space-between"}>
        <Skeleton rounded={"lg"} noOfLines={1} w={"60%"} h={5} mb={1} />
        <Skeleton rounded={"lg"} noOfLines={1} w={"15%"} h={5} />
      </HStack>
      <Skeleton rounded={"lg"} w={"40%"} h={5} mb={1} />
      <Skeleton rounded={"lg"} w={"30%"} h={5} mb={3} />
      <Skeleton rounded={"lg"} w={"25%"} h={5} />
    </Box>
  );
}
