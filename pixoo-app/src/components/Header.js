import React from 'react';
import { Flex , Box, Text, Image  } from '@chakra-ui/core';
import { FiChevronLeft ,FiMenu } from "react-icons/fi";
import white from '../resources/white.png';
import black from '../resources/black.png';
import mocha from '../resources/mocha.png';
import latte from '../resources/latte.png';

function Header ({}) {

    return (
        <Box bg="#ffffff"  width="100%" boxShadow="xl" zIndex={1}>
            <Flex
                p={2}
                alignItems="center"
                justifyContent="space-between"
            >
                <Box as={FiChevronLeft} fontSize={["3xl"]} color="#ff0072" />
                <Text>Style Photos</Text>
                <Box as={FiMenu} fontSize={["3xl"]} color="#ff0072" />
            </Flex>
            <Flex
                alignItems="center"
                justifyContent="center"
            >
                <Image src={white} w="75px" h="83px" backgroundImage="linear-gradient(0deg,rgba(255,0,149,.25),rgba(255,0,149,0))"/>
                <Image src={black} w="75px" h="83px"/>
                <Image src={mocha} w="75px" h="83px"/>
                <Image src={latte} w="75px" h="83px"/>
            </Flex>
        </Box>
    );
};

export default Header;