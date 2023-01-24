import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  VStack,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  Box,
} from "@chakra-ui/react";
import SocialLogin from "./SocialLogin";
import { FaUserNinja, FaLock, FaEnvelope, FaUserSecret } from "react-icons/fa";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sign Up</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color={"gray.600"}>
                    <FaUserSecret />
                  </Box>
                }
              ></InputLeftElement>
              <Input variant={"filled"} placeholder="Name" />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color={"gray.600"}>
                    <FaEnvelope />
                  </Box>
                }
              ></InputLeftElement>
              <Input variant={"filled"} placeholder="Email" />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color={"gray.600"}>
                    <FaUserNinja />
                  </Box>
                }
              ></InputLeftElement>
              <Input variant={"filled"} placeholder="Username" />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color={"gray.600"}>
                    <FaLock />
                  </Box>
                }
              ></InputLeftElement>
              <Input variant={"filled"} placeholder="Password" />
            </InputGroup>
          </VStack>
          <Button mt={4} colorScheme={"red"} w="100%">
            Log In
          </Button>
          <SocialLogin />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
