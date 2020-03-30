import React from 'react';
import { Flex, Image, Box, Text  } from '@chakra-ui/core';
import { TiThMenu ,TiChevronLeft } from "react-icons/ti";
import logo from '../resources/logo.svg';

function Header ({}) {

    return (
        <Flex
            py="2"
            px="3"
            bg="#FEDF0A"
            height={"10%"}
            boxShadow="md"
            alignItems="center"
            justifyContent="space-between"
        >
            <Flex>
                <Box as={TiChevronLeft} fontSize={["3xl"]} color="white" />
            </Flex>
            <Image src={logo} height={"100%"} />
            <Flex>
                <Box as={TiThMenu} fontSize={["3xl"]} color="white" />
            </Flex>
        </Flex>
    );
};

export default Header;