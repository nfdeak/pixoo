import React from 'react';
import { Flex , Box, Text, Image  } from '@chakra-ui/core';
import { TiThMenu ,TiChevronLeft } from "react-icons/ti";
import white from '../resources/frame1.svg';
import black from '../resources/frame2.svg';
import mocha from '../resources/frame3.svg';
import latte from '../resources/frame4.svg';

function Header ({}) {

    return (
        <Box bg="#ffffff"  width="100%" boxShadow="xl">
            <Flex
                p={2}
                alignItems="center"
                justifyContent="space-between"
            >
                <Box as={TiChevronLeft} fontSize={["3xl"]} color="#ff0072" />
                <Text>Style Photos</Text>
                <Box as={TiThMenu} fontSize={["3xl"]} color="#ff0072" />
            </Flex>
            <Flex
                alignItems="center"
                justifyContent="center"
            >
                <Flex backgroundImage="linear-gradient(0deg,rgba(255,0,149,.25),rgba(255,0,149,0))" w="85px" h="100px" alignItems="center"
                      justifyContent="center" direction="column">
                    <Image src={white} w="65px" />
                    <Text>White</Text>
                </Flex>
                <Flex w="85px" h="100px" alignItems="center"
                      justifyContent="center" direction="column">
                    <Image src={black} w="65px" />
                    <Text>Black</Text>
                </Flex>
                <Flex w="85px" h="100px" alignItems="center"
                      justifyContent="center" direction="column">
                    <Image src={mocha} w="65px" />
                    <Text>Mocha</Text>
                </Flex>
                <Flex w="85px" h="100px" alignItems="center"
                      justifyContent="center" direction="column">
                    <Image src={latte} w="65px" />
                    <Text>Latte</Text>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Header;