import React, {useState} from 'react';
import {Flex, Box, Text, Image,Menu,MenuButton,MenuList,MenuItem} from '@chakra-ui/core';
import {FiChevronLeft, FiMenu} from "react-icons/fi";
import { useNavigate } from "@reach/router"
import white from '../resources/white.png';
import black from '../resources/black.png';
import mocha from '../resources/mocha.png';
import latte from '../resources/latte.png';

function Header({onChangeFrame}) {
    const [selectedFrame, setSelectedFrame] = useState('white');
    const navigate = useNavigate();


    const selectFrame  = (frame) => {
        setSelectedFrame(frame);
        onChangeFrame(frame);
    }

    return (
        <Box bg="#ffffff" width="100%" boxShadow="xl" zIndex={1}>
            <Flex
                p={2}
                alignItems="center"
                justifyContent="space-between"
            >
                <Box as={FiChevronLeft} fontSize={["3xl"]} color="primary" onClick={() => navigate('../', { replace: false })} cursor={"pointer"}/>
                <Text>Style Photos</Text>
                <Menu>
                    <MenuButton>
                        <Box as={FiMenu} fontSize={["3xl"]} color="primary"/>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>New File</MenuItem>
                        <MenuItem>New Window</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
            <Flex
                alignItems="center"
                justifyContent="center"
            >
                <Image cursor="pointer" src={white} w="75px" h="83px" onClick={()=>selectFrame('white')} backgroundImage={selectedFrame === 'white' ? "linear-gradient(0deg,rgba(255,0,149,.25),rgba(255,0,149,0))":undefined}/>
                <Image cursor="pointer" src={black} w="75px" h="83px" onClick={()=>selectFrame('black')} backgroundImage={selectedFrame === 'black' ? "linear-gradient(0deg,rgba(255,0,149,.25),rgba(255,0,149,0))":undefined}/>
                <Image cursor="pointer" src={mocha} w="75px" h="83px" onClick={()=>selectFrame('mocha')} backgroundImage={selectedFrame === 'mocha' ? "linear-gradient(0deg,rgba(255,0,149,.25),rgba(255,0,149,0))":undefined}/>
                <Image cursor="pointer" src={latte} w="75px" h="83px" onClick={()=>selectFrame('latte')} backgroundImage={selectedFrame === 'latte' ? "linear-gradient(0deg,rgba(255,0,149,.25),rgba(255,0,149,0))":undefined}/>
            </Flex>
        </Box>
    );
};

export default Header;