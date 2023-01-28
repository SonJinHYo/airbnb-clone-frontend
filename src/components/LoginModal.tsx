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
  Text,
} from "@chakra-ui/react";
import SocialLogin from "./SocialLogin";
import { FaUserNinja, FaLock } from "react-icons/fa";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface IForm {
  username: string;
  password: string;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();
  const onSubmit = (data: IForm) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Log In</ModalHeader>
        <ModalCloseButton />
        <ModalBody as={"form"} onSubmit={handleSubmit(onSubmit)}>
          <VStack>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color={"gray.600"}>
                    <FaUserNinja />
                  </Box>
                }
              ></InputLeftElement>
              <Input
                required
                {...register("username", { required: true })}
                variant={"filled"}
                placeholder="Username"
              />
              <Text fontSize={"sm"} color="red.500">
                {errors.username?.message}
              </Text>
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color={"gray.600"}>
                    <FaLock />
                  </Box>
                }
              ></InputLeftElement>
              <Input
                required
                {...register("password", { required: true })}
                type="password"
                variant={"filled"}
                placeholder="Password"
              />
              <Text fontSize={"sm"} color="red.500">
                {errors.password?.message}
              </Text>
            </InputGroup>
          </VStack>
          <Button type="submit" mt={4} colorScheme={"red"} w="100%">
            Log In
          </Button>
          <SocialLogin />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
