import React, { useEffect } from "react";
import { Flex  } from '@chakra-ui/core';
import UploadSquare from "../components/UploadSquare";
import bg from '../resources/bg.jpg';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Drawer,DrawerHeader,DrawerOverlay,DrawerContent, DrawerCloseButton} from "@chakra-ui/core";
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
                placement="bottom"
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader>Create your account</DrawerHeader>
                </DrawerContent>
            </Drawer>
            <Footer onOpen={onOpen}/>
        </Flex>
    );
}
export default Review;
