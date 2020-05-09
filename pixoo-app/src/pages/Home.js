/*@jsx jsx*/
import { jsx , css } from "@emotion/core";
import React, { useState } from "react";
import {Flex, useDisclosure, Text, Image, Box} from '@chakra-ui/core';
import desktopBg from '../resources/desktop.png';
import mobileBg from '../resources/mobile.jpg'
import Footer from "../components/Footer";
import { useNavigate } from "@reach/router"
import logo from '../resources/logo.svg';

function Home() {
    const navigate = useNavigate();
    return (
        <Flex direction="column" h="100%">
            <Image position="absolute" src={"https://www.mixtiles.com/images/logo.png"} zIndex={1} p={3} mx={'auto'} left={0} right={0}/>
            <Flex position="absolute" h="100%" width={['100%','100%','100%','61%']} ml={[null,null,null,"39%"]} bgImage={["url(" + mobileBg + ")","url(" + mobileBg + ")","url(" + mobileBg + ")","url(" + desktopBg + ")"]}  bgPos="top right" bgRepeat="no-repeat" bgSize="contain" overflow="auto" justifyContent="center"/>
            <Flex h="100%" px="48px"  justifyContent="center" alignItems="center" zIndex={1}>
                <Text maxWidth="780px" color="primary" fontSize={["35px","35px","42px","5xl"]} textAlign="center" fontWeight="600">Turn your photos into affordable, stunning wall art</Text>
            </Flex>
            <Footer onClickButton={() => navigate('/review', { replace: false })} text={"Let's go"}/>
        </Flex>
    );
}

export default Home;
