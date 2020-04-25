/*@jsx jsx*/
import { jsx , css } from "@emotion/core";
import React, { useState, useEffect } from "react";
import {Flex, Image, Grid, Drawer, DrawerHeader, DrawerOverlay, DrawerContent, useDisclosure} from '@chakra-ui/core';
import UploadSquare from "../components/UploadSquare";
import bg from '../resources/bg.jpg';
import white from '../resources/whiteFrame.svg';
import black from '../resources/blackFrame.svg';
import Header from "../components/Header";
import Footer from "../components/Footer";
import * as keyframes from '../utils/keyframes';

function Review() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [photosArray, setPhotosArray] = useState([])
    const [justifyContent, setJustifyContent] = useState('center');
    const [selectedFrame, setSelectedFrame] = useState(white);

    const onChangeFrame  = (frame) => {
        setSelectedFrame(frame==='white'? white :(frame==='black'? black : (frame==='mocha' ? black:(frame==='latte' ? black:undefined))));
    }

    const removePhoto  = () => {
        photosArray.length==0 ? setJustifyContent('center') : undefined;
    }

    const addNewPhoto  = (base64URL, position) => {
        photosArray.length==0 ? setJustifyContent('flex-start') : undefined;
        setPhotosArray(position === 'right' ? photosArray => [{src:base64URL, id: Date.now()}].concat(photosArray) : photosArray => photosArray.concat([{src:base64URL, id: Date.now()}]));
    }

    useEffect(() => {
        photosArray.length==1 ? document.getElementById('picture-frame').scrollIntoView({ inline: 'center',behavior: 'smooth' }) : undefined;
    }, [photosArray]);

    const photosInFrames = photosArray.map((photo) =>
        <Grid id="picture-frame" h="253px" minW="253px" mx={2} key={photo.id} css={css`animation: ${keyframes.fadeIn} 0.5s ease;`}>
            <Image maxW="100%" maxH="100%" minW="100%" minH="100%" p={2} src={photo.src} objectFit="cover" gridArea="1 / 1"/>
            <Image maxW="100%" maxH="100%" minW="100%" minH="100%" src={selectedFrame} gridArea="1 / 1"/>
        </Grid>);

    return (
        <Flex direction="column" h="100%">
            <Header onChangeFrame={onChangeFrame} />
            <Flex bgImage={"url(" + bg + ")"} bgPos="center top" bgRepeat="no-repeat" bgSize="cover"
                  w="100%"
                  h="100%"
                  alignItems="center"
                  justifyContent={justifyContent}
                  overflowX="auto"
            >
                <Flex mr={2} ml={4}><UploadSquare isAnimating={ photosArray.length==0 ? true : false} onUploadPhoto={addNewPhoto} position="right"/></Flex>
                {photosInFrames}
                {photosArray.length>0? <Flex display={["flex","flex","none","none"]} mx={2}><UploadSquare isAnimating={false} onUploadPhoto={addNewPhoto} position="left"/></Flex>: undefined}
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
