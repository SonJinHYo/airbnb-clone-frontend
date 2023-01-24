import { Box, useDisclosure } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Root() {
  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  );
}

function useDisclouser() {
  throw new Error("Function not implemented.");
}
