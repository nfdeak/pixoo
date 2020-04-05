import React from 'react';
import { Flex , Box, Text  } from '@chakra-ui/core';
import { TiThMenu ,TiChevronLeft } from "react-icons/ti";

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
                <Box w="85px" h="100px" bg="tomato"></Box>
                <Box w="85px" h="100px" bg="blue"></Box>
                <Box w="85px" h="100px" bg="red"></Box>
                <Box w="85px" h="100px" bg="tomato"></Box>
            </Flex>
        </Box>
    );
};

export default Header;