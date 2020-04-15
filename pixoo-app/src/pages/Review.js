import React from "react";
import {Flex, Image, Grid} from '@chakra-ui/core';
import UploadSquare from "../components/UploadSquare";
import bg from '../resources/bg.jpg';
import whiteFrame from '../resources/whiteFrame.svg';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Drawer, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton} from "@chakra-ui/core";
import {useDisclosure} from "@chakra-ui/core";
import test from "../resources/test.jpg";

function Review() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const photosArray = [
        {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
        {id: 2, title: 'Installation', content: 'You can install React from npm.'},
    ];
    const photos = photosArray.map((photo) =>
        <Grid
              h="253px"
              minWidth="253px"
              mr={5}
              key={photo.id}
        >
            <Image maxWidth="100%" maxHeight="100%" p={2} src={test} gridArea="1 / 1"></Image>
            <Image maxWidth="100%" maxHeight="100%" src={whiteFrame} gridArea="1 / 1"></Image>
        </Grid>
    );
    return (
        <Flex direction="column" h="100%">
            <Header/>
            <Flex
                bgImage={"url(" + bg + ")"} bgPos="center top" bgRepeat="no-repeat" bgSize="cover"
                w="100%"
                h="100%"
                alignItems="center"
                justifyContent="flex-start"
                overflowX="auto"
            >
                <Flex mx={5}><UploadSquare/></Flex>
                {photos}
            </Flex>
            <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerHeader>Create your account</DrawerHeader>
                </DrawerContent>
            </Drawer>
            <Footer onOpen={onOpen}/>
        </Flex>
    );
}

export default Review;
