/*@jsx jsx*/
import { jsx , css, keyframes } from "@emotion/core";
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
    const [justifyContent, setJustifyContent] = useState('center');

    const easeIn = keyframes`
      0% {
        transform: scale(0)
      }
      100% {
        transform: scale(1)
      }
    `

    const addNewPhoto  = (base64URL) => {
        setJustifyContent('flex-start');
        setPhotosArray(photosArray => [{src:base64URL, id: Date.now()}].concat(photosArray));
    }

    const photosInFrames = photosArray.map((photo) =>
        <Grid h="253px" minW="253px" mr={5} key={photo.id} css={css`animation: ${easeIn} 0.28s ease;`}>
            <Image maxW="100%" maxH="100%" minW="100%" minH="100%" p={2} src={photo.src} objectFit="cover" gridArea="1 / 1"/>
            <Image maxW="100%" maxH="100%" minW="100%" minH="100%" src={whiteFrame} gridArea="1 / 1"/>
        </Grid>);

    return (
        <Flex direction="column" h="100%">
            <Header/>
            <Flex
                bgImage={"url(" + bg + ")"} bgPos="center top" bgRepeat="no-repeat" bgSize="cover"
                w="100%"
                h="100%"
                alignItems="center"
                justifyContent={justifyContent}
                overflowX="auto"
            >
                <Flex mx={5}><UploadSquare isAnimating={ photosArray.length==0 ? true : false} onUploadPhoto={addNewPhoto}/></Flex>
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
