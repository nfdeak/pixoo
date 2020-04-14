import React from "react";
import { Flex, Box  } from '@chakra-ui/core';
import UploadSquare from "../components/UploadSquare";
import bg from '../resources/bg.jpg';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Drawer,DrawerHeader,DrawerOverlay,DrawerContent, DrawerCloseButton} from "@chakra-ui/core";
import { useDisclosure } from "@chakra-ui/core";

function Review() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const photosArray = [
        {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
        {id: 2, title: 'Installation', content: 'You can install React from npm.'},
    ];
    const photos = photosArray.map((photo) =>
        <Box bg="tomato"
             h="230px"
             minWidth="230px"
             mx={5}
             key={photo.id}
        >
        </Box>
    );
    return(
        <Flex direction="column" h="100%" >
            <Header/>
            <Flex
                bgImage={"url(" + bg + ")"} bgPos="center top" bgRepeat="no-repeat" bgSize="cover"
                w="100%"
                h="100%"
                alignItems="center"
                justifyContent="flex-start"
                overflowX="auto"
            >
                <Box minWidth="10px" h="230px" bg="transparent"></Box>
                <UploadSquare/>
                {photos}
                <Box minWidth="10px" h="230px" bg="transparent"></Box>
            </Flex>
            <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
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
