import React from "react";
import { Flex  } from '@chakra-ui/core';
import UploadSquare from "../components/UploadSquare";
import bg from '../resources/bg.jpg';
import SelectFrame from "../components/SelectFrame";

export default () => (
    <Flex
        bgImage={"url(" + bg + ")"} bgPos="center top" bgRepeat="no-repeat" bgSize="cover"
        height="83%"
        w="100%"
        alignItems="center"
        justifyContent="space-start"
        flexDirection="column"
    >
        <SelectFrame/>
        <UploadSquare/>
    </Flex>
);
