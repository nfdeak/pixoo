import React, { useState } from "react";
import {Flex, Image, Grid} from '@chakra-ui/core';
import UploadSquare from "../components/UploadSquare";
import bg from '../resources/bg.jpg';
import whiteFrame from '../resources/whiteFrame.svg';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Drawer, DrawerHeader, DrawerOverlay, DrawerContent} from "@chakra-ui/core";
import {useDisclosure} from "@chakra-ui/core";

function Review() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [photosArray, setPhotosArray] = useState([])


    const addNewPhoto  = (base64URL) => {
        setPhotosArray(photosArray => [{src:base64URL, id: Date.now()}].concat(photosArray));
    }

    const photosInFrames = photosArray.map((photo) =>
        <Grid h="253px" minWidth="253px" mr={5} key={photo.id}>
            <Image maxW="100%" maxH="100%" p={2} src={photo.src} gridArea="1 / 1"/>
            <Image maxW="100%" maxH="100%" src={whiteFrame} gridArea="1 / 1"/>
        </Grid>);

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
                <Flex mx={5}><UploadSquare onUploadPhoto={addNewPhoto}/></Flex>
                {photosInFrames}
            </Flex>
            <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerHeader>Create your account</DrawerHeader>
                </DrawerContent>
            </Drawer>
            <Footer onClickButton={onOpen}/>
        </Flex>
    );
}

export default Review;
