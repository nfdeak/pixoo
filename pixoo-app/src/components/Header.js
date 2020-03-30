import React from 'react';
import { Flex, Image, Box } from '@chakra-ui/core';
import logo from '../resources/logo.svg';

function Header ({}) {

    return (
        <Flex
            py="2"
            justify="center"
            bg="#FEDF0A"
        >
            <Box width={[1/2, null, null, 1/8]}>
                <Image src={logo} />
            </Box>
            <Flex align="end">
            </Flex>
        </Flex>
    );
};

export default Header;