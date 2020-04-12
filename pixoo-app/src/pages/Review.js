import React from "react";
import { Flex  } from '@chakra-ui/core';
import UploadSquare from "../components/UploadSquare";
import bg from '../resources/bg.jpg';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button, Input
} from "@chakra-ui/core";
import { useDisclosure } from "@chakra-ui/core";

function Review() {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return(
        <Flex direction="column" h="100%">
            <Header/>
            <Flex
                bgImage={"url(" + bg + ")"} bgPos="center top" bgRepeat="no-repeat" bgSize="cover"
                w="100%"
                h="100%"
                alignItems="center"
                justifyContent="center"
                boxShadow="xl"
                zIndex="-1"
            >

                <UploadSquare/>
            </Flex>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>
                    <Flex id="paypal-button-container"></Flex>
                </DrawerContent>
            </Drawer>
            <Footer onOpen={onOpen}/>
        </Flex>
    );
}
export default Review;
