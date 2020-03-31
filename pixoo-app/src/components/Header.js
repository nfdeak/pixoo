import React from 'react';
import { Flex, Image, Box, Text  } from '@chakra-ui/core';
import { TiThMenu ,TiChevronLeft } from "react-icons/ti";
import logo from '../resources/logo.svg';

function Header ({}) {

    return (
        <Flex
            py="2"
            px="3"
            bg="#ffffff"
            height="10%"
            width="100%"
            boxShadow="xl"
            alignItems="center"
            justifyContent="space-between"
            zIndex="overlay"
            pos="relative"
        >
            <Flex>
                <Box as={TiChevronLeft} fontSize={["3xl"]} color="#ff0072" />
            </Flex>
            <Image src={logo} height={"100%"} />
            <Flex>
                <Box as={TiThMenu} fontSize={["3xl"]} color="#ff0072" />
            </Flex>
        </Flex>
    );
};

export default Header;