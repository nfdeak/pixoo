/*@jsx jsx*/
import { jsx , css } from "@emotion/core";
import React, { useState } from "react";
import {Flex, useDisclosure, Text, Image, Box} from '@chakra-ui/core';
import desktopBg from '../resources/desktop.png';
import mobileBg from '../resources/mobile.jpg'
import Footer from "../components/Footer";
import { useNavigate } from "@reach/router"
import logo from '../resources/logo.svg';

function PaymentSuccess() {
    const navigate = useNavigate();
    return (
        <Flex direction="column" h="100%">
            <Image position="absolute" src={"https://www.mixtiles.com/images/logo.png"} zIndex={1} p={3} mx={'auto'} left={0} right={0}/>
            <Flex position="absolute" h="100%" width={['100%','100%','100%','61%']} ml={[null,null,null,"39%"]} bgImage={["url(" + mobileBg + ")","url(" + mobileBg + ")","url(" + mobileBg + ")","url(" + desktopBg + ")"]}  bgPos="top right" bgRepeat="no-repeat" bgSize={["cover","cover","contain"]} overflow="auto" justifyContent="center"/>
            <Flex direction="column" h="100%" px="48px"  justifyContent="center" alignItems="center" zIndex={1}>
                <Text maxWidth="780px" color="primary" fontSize={["5xl"]} fontWeight="600" pb={5}>Thank you!</Text>
                <Text maxWidth="780px" color="primary" fontSize={['2xl']} textAlign="center" fontWeight="200">Your payment was successfully processed. We will ship your order shortly. Should you need any further information, please contact us on our chat.</Text>
            </Flex>
            <Footer onClickButton={() => navigate('/wall', { replace: false })} text={"Order more photo tiles"}/>
        </Flex>
    );
}

export default PaymentSuccess;
