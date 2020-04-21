/*@jsx jsx*/
import { jsx , css, keyframes } from "@emotion/core";
import React, { useState, useEffect } from "react";
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

    const fadeIn = keyframes`
      0% {
        opacity:0
      }
      100% {
        opacity:1
      }
    `

    const removePhoto  = () => {
        if(photosArray.length==0)
            setJustifyContent('center');
        //setPhotosArray(photosArray => [{src:base64URL, id: Date.now()}].concat(photosArray));
    }

    const addNewPhoto  = (base64URL) => {
        if(photosArray.length==0)
            setJustifyContent('flex-start');
        setPhotosArray(photosArray => [{src:base64URL, id: Date.now()}].concat(photosArray));
    }

    useEffect(() => {
        if(photosArray.length==1)
            document.getElementById('middle').scrollIntoView({ inline: 'center' });
    }, [photosArray]);

    const photosInFrames = photosArray.map((photo,index) =>
        <Grid id="middle" h="253px" minW="253px" mx={2} key={photo.id} css={css`animation: ${fadeIn} 0.35s ease;`}>
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
                <Flex mr={2} ml={4}><UploadSquare isAnimating={ photosArray.length==0 ? true : false} onUploadPhoto={addNewPhoto}/></Flex>
                {photosInFrames}
                {photosArray.length>0?<Flex display={["flex","flex","none","none"]} mx={2}><UploadSquare isAnimating={false} onUploadPhoto={addNewPhoto}/></Flex>: undefined}
                {photosArray.length>0? <Flex minW={2} visibility="hidden">.</Flex>:undefined}
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
