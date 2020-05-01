/*@jsx jsx*/
import { jsx , css } from "@emotion/core";
import React, { useState, useEffect } from "react";
import {Flex, Image, Grid, useDisclosure} from '@chakra-ui/core';
import UploadSquare from "../components/UploadSquare";
import bg from '../resources/bg.jpg';
import white from '../resources/whiteFrame.svg';
import black from '../resources/blackFrame.svg';
import Header from "../components/Header";
import Footer from "../components/Footer";
import PaymentDrawer from "../components/PaymentDrawer";
import DeleteModal from "../components/DeleteModal";
import * as keyframes from '../utils/keyframes';

function Review() {
    const {isOpen: isOpenDrawer, onOpen: onOpenDrawer, onClose: onCloseDrawer} = useDisclosure();
    const {isOpen: isOpenModal, onOpen: onOpenModal, onClose: onCloseModal} = useDisclosure();

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

    const photosInFrames = photosArray.map((photo,index) =>
        <Grid m={2} onClick={onOpenModal} id={photosArray.length===1 ? 'last' : index === 0 ? 'first': index+1 === photosArray.length ? 'last' : undefined} h={["160px","160px","253px"]} minW={["160px","160px","253px"]} maxW={["160px","160px","253px"]} maxH={["160px","160px","253px"]} key={photo.id} css={css`animation: ${keyframes.fadeIn} 0.5s ease;`} cursor="pointer">
            <Image maxW="100%" maxH="100%" minW="100%" minH="100%" p={2} src={photo.src} objectFit="cover" gridArea="1 / 1"/>
            <Image maxW="100%" maxH="100%" minW="100%" minH="100%" src={selectedFrame} gridArea="1 / 1"/>
        </Grid>);

    return (
        <Flex direction="column" h="100%">
            <Header onChangeFrame={onChangeFrame} />
            <Flex bgImage={"url(" + bg + ")"} bgPos="center top" bgRepeat="no-repeat" bgSize="cover"
                  w="100%"
                  h="100%"
                  overflow="auto"
                  alignContent={[photosArray.length>0? "flex-start" : null]}
                  alignItems={[photosArray.length===0? "center" : null]}
                  justifyContent={["center"]}
                  pt={photosArray.length===0? null : 2}
                  px={[2,2,"10%","20%"]}
                  css={css`-ms-overflow-style: none;scrollbar-width: none;::-webkit-scrollbar{display: none;}`}
                  flexWrap={["wrap"]}
            >
                {/*{photosArray.length > 0 && <Flex m={2} display={["flex","flex","none","none","none"]}><UploadSquare isAnimating={false} onUploadPhoto={addNewPhoto} position="left"/></Flex>}*/}
                {photosInFrames}
                <Flex  m={2} mb={4}><UploadSquare isAnimating={photosArray.length===0} onUploadPhoto={addNewPhoto} position="right"/></Flex>
            </Flex>
            <PaymentDrawer isOpen={isOpenDrawer} onClose={onCloseDrawer}/>
            <DeleteModal isOpen={isOpenModal} onClose={onCloseModal}></DeleteModal>
            <Footer onClickButton={onOpenDrawer}/>
        </Flex>
    );
}

export default Review;
