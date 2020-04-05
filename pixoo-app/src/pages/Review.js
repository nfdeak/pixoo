import React from "react";
import { Flex  } from '@chakra-ui/core';
import UploadSquare from "../components/UploadSquare";
import bg from '../resources/bg.jpg';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default () => (
    <Flex direction="column" h="100%" >
        <Header/>
        <Flex
            bgImage={"url(" + bg + ")"} bgPos="center top" bgRepeat="no-repeat" bgSize="cover"
            w="100%"
            h="100%"
            alignItems="center"
            justifyContent="center"
            boxShadow="xl"
            zIndex="-1"
        >
            <UploadSquare/>
        </Flex>
        <Footer/>
    </Flex>
);
