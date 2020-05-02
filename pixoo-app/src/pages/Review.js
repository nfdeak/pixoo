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
    const {isOpen: isOpenDrawer, onOpen: onOpenDrawer, onClose: onCloseDrawer, onToggle:onToggleDrawer} = useDisclosure();
    const {isOpen: isOpenModal, onOpen: onOpenModal, onClose: onCloseModal, onToggle:onToggleModal} = useDisclosure();

    const [photosArray, setPhotosArray] = useState([])
    const [selectedFrame, setSelectedFrame] = useState(white);
    const [selectedPhotoId, setSelectedPhotoId] = useState(null);

    const onChangeFrame  = (frame) => {
        setSelectedFrame(frame==='white'? white :(frame==='black'? black : (frame==='mocha' ? black:(frame==='latte' ? black:undefined))));
    }

    const onCLickFrame = (id) =>{
        onOpenModal();
        setSelectedPhotoId(id);
    }

    const onDeletePhoto  = () => {
        setPhotosArray(photosArray.filter((photo)=>(photo.id !== selectedPhotoId)));
        onCloseModal();
    }

    const addNewPhoto  = (base64URL, position) => {
        setPhotosArray(position === 'right' ?  photosArray => photosArray.concat([{src:base64URL, id: Date.now()}]): photosArray => [{src:base64URL, id: Date.now()}].concat(photosArray));
        window.innerWidth> 760 ? document.getElementById('right').scrollIntoView({ block: 'center',behavior: 'smooth' }) : position === 'right' ? document.getElementById('last').scrollIntoView({ block: 'center',behavior: 'smooth' }) : document.getElementById('first').scrollIntoView({ block: 'center',behavior: 'smooth' });
    }

    const photosInFrames = photosArray.map((photo,index) =>
        <Grid m={2} onClick={()=>onCLickFrame(photo.id)} id={photosArray.length===1 ? 'last' : index === 0 ? 'first': index+1 === photosArray.length ? 'last' : undefined} h={["253px"]} w={["253px"]} key={photo.id} css={css`animation: ${keyframes.fadeIn} 0.5s ease;`} cursor="pointer">
            <Image maxW="100%" maxH="100%" minW="100%" minH="100%" p={2} src={photo.src} objectFit="cover" gridArea="1 / 1"/>
            <Image src={selectedFrame} gridArea="1 / 1"/>
        </Grid>);

    return (
        <Flex direction="column" h="100%">
            <Header onChangeFrame={onChangeFrame}/>
            <Flex h="100%" bgImage={"url(" + bg + ")"} bgPos="center top" bgRepeat="no-repeat" bgSize="cover" overflow="auto" justifyContent="center">
                <Flex
                    maxW="850px"
                    h="100%"
                    overflow="auto"
                    alignContent={[null,photosArray.length>=1 ? "flex-start" : "center",null,photosArray.length>=3 ? "flex-start" : "center"]}
                    alignItems={[photosArray.length===0 && "center" ]}
                    justifyContent={["center"]}
                    py={2}
                    css={css`-ms-overflow-style: none;scrollbar-width: none;::-webkit-scrollbar{display: none;}`}
                    flexWrap={["wrap"]}
                >
                    {/*{photosArray.length > 0 && <Flex m={2} display={["flex","flex","none","none","none"]}><UploadSquare isAnimating={false} onUploadPhoto={addNewPhoto} position="left"/></Flex>}*/}
                    {photosInFrames}
                    <Flex  m={2}><UploadSquare isAnimating={photosArray.length===0} onUploadPhoto={addNewPhoto} position="right"/></Flex>
                </Flex>
            </Flex>
            <PaymentDrawer isOpen={isOpenDrawer} onClose={onCloseDrawer}/>
            <DeleteModal isOpen={isOpenModal} onClose={onCloseModal} onDeletePhoto={onDeletePhoto}></DeleteModal>
            <Footer onClickButton={onOpenDrawer}/>
        </Flex>
    );
}

export default Review;
