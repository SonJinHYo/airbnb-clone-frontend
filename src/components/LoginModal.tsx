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
  useToast,
} from "@chakra-ui/react";
import SocialLogin from "./SocialLogin";
import { FaUserNinja, FaLock } from "react-icons/fa";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  IUsernameLoginError,
  IUsernameLoginSuccess,
  IUsernameLoginVariables,
  usernameLogIn,
} from "../api";

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
  const toast = useToast();
  const queryClient = useQueryClient();
  const mutation = useMutation<
    IUsernameLoginSuccess,
    IUsernameLoginError,
    IUsernameLoginVariables
  >(usernameLogIn, {
    onMutate: () => {
      console.log("mutation start");
    },
    onSuccess: (data) => {
      toast({
        title: "welcome!",
        status: "success",
      });
      onClose();
      queryClient.refetchQueries(["me"]);
    },
    onError: (error) => {
      console.log("mutation error");
    },
  });
  const onSubmit = ({ username, password }: IForm) => {
    mutation.mutate({ username, password });
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
          <Button
            isLoading={mutation.isLoading}
            type="submit"
            mt={4}
            colorScheme={"red"}
            w="100%"
          >
            Log In
          </Button>
          <SocialLogin />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
