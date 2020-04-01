import React from "react";
import { Flex  } from '@chakra-ui/core';
import UploadSquare from "../components/UploadSquare";
import bg from '../resources/bg.jpg';

export default () => (
    <Flex
        bgImage={"url(" + bg + ")"} bgPos="center top" bgRepeat="no-repeat" bgSize="cover"
        height="76%"
        w="100%"
        alignItems="center"
        justifyContent="center"
    >
        <UploadSquare/>
    </Flex>
);
