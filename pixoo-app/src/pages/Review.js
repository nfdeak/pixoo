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
    const [selectedFrame, setSelectedFrame] = useState(white);

    const onChangeFrame  = (frame) => {
        setSelectedFrame(frame==='white'? white :(frame==='black'? black : (frame==='mocha' ? black:(frame==='latte' ? black:undefined))));
    }

    const removePhoto  = () => {
    }

    const addNewPhoto  = (base64URL, position) => {
        setPhotosArray(position === 'right' ?  photosArray => photosArray.concat([{src:base64URL, id: Date.now()}]): photosArray => [{src:base64URL, id: Date.now()}].concat(photosArray));
        window.innerWidth> 760 ? document.getElementById('right').scrollIntoView({ inline: 'center',behavior: 'smooth' }) : position === 'right' ? document.getElementById('last').scrollIntoView({ inline: 'center',behavior: 'smooth' }) : document.getElementById('first').scrollIntoView({ inline: 'center',behavior: 'smooth' });
    }

    useEffect(() => {
        photosArray.length==1 ? document.getElementById('first').scrollIntoView({ inline: 'center',behavior: 'smooth' }) : undefined;
    }, [photosArray]);

    const photosInFrames = photosArray.map((photo,index) =>
        <Grid id={index==0 ? 'first': index+1 == photosArray.length ? 'last':undefined} h="253px" minW="253px" mx={2} key={photo.id} css={css`animation: ${keyframes.fadeIn} 0.5s ease;`}>
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
                  justifyContent={photosArray.length==0? "center": "flex-start"}
                  overflowX="auto"
                  px={2}
                  css={css`-ms-overflow-style: none;scrollbar-width: none;::-webkit-scrollbar{display: none;}`}
            >
                {photosArray.length>0? <Flex mx={2} display={["flex","flex","none","none"]}><UploadSquare isAnimating={ false} onUploadPhoto={addNewPhoto} position="left"/></Flex>: undefined}
                {photosInFrames}
                <Flex mx={2}><UploadSquare isAnimating={ photosArray.length==0 ? true : false} onUploadPhoto={addNewPhoto} position="right"/></Flex>
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
