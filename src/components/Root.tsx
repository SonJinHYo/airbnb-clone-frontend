import { Box, Button, HStack, IconButton, Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import {Outlet} from "react-router-dom"
import {FaAirbnb, FaMoon} from "react-icons/fa"


export default function Root(){
    const{isOpen,onClose,onOpen} = useDisclosure();

    return( 
    <Box>
        <HStack justifyContent={"space-between"} px={"10"} py={"5"} borderBottomWidth={1}>
            <Box color={"red.500"}>
            <FaAirbnb size={"48"}/>
            </Box>
            <HStack spacing={2}>
                <IconButton aria-label={"Toggle dark mode"} icon={<FaMoon/>} variant={"ghost"}></IconButton>
                <Button onClick={onOpen}>Log in</Button>
                <Button colorScheme={"red"}>Sign up</Button>
            </HStack>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Log In</ModalHeader>
                    <ModalCloseButton/>
                </ModalContent>
            </Modal>
        </HStack>
        <Outlet/>
    </Box>)
}

function useDisclouser() {
    throw new Error("Function not implemented.");
}
