import { Box, Grid, Skeleton, SkeletonText } from "@chakra-ui/react";
import Room from "../components/Room";

export default function Homes() {
  return (
    <Grid
      mt={10}
      px={{
        base: 10,
        lg: 40,
      }}
      columnGap={4}
      rowGap={8}
      templateColumns={{
        sm: "1fr",
        md: "1fr 1fr",
        lg: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
        "2xl": "repeat(5, 1fr)",
      }}
    >
      <Box>
        <Skeleton height={280} rounded="2xl" mb={7} />
        <SkeletonText noOfLines={1} w={"100%"} mb={2} />
        <SkeletonText noOfLines={1} w={"50%"} mb={7} />
        <SkeletonText noOfLines={1} w={"30%"} />
      </Box>{" "}
      <Room />
    </Grid>
  );
}