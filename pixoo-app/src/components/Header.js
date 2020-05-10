import React, {useState} from 'react';
import {Flex, Box, Text, Image,Menu,MenuButton,MenuList,MenuItem, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,} from '@chakra-ui/core';
import {FiChevronLeft, FiMenu} from "react-icons/fi";
import { useNavigate } from "@reach/router"
import white from '../resources/white.png';
import black from '../resources/black.png';
import mocha from '../resources/mocha.png';
import latte from '../resources/latte.png';
import {faqText} from "../utils/faq";
import {jsx} from "@emotion/core";

function Header({onChangeFrame}) {
    const questionsAndAswersArray = faqText;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedFrame, setSelectedFrame] = useState('white');
    const navigate = useNavigate();

    const selectFrame  = (frame) => {
        setSelectedFrame(frame);
        onChangeFrame(frame);
    }

    const questionsAndAnswers = questionsAndAswersArray.map((faq,index) =>
        <Flex py={2} d={'column'} key={index}>
            <Text pb={1} color={'primary'} fontSize='20px' fontWeight={'bold'}>{faq.question}</Text>
            <Text>{faq.answer}</Text>
        </Flex>);

    return (
        <Box bg="#ffffff" width="100%" boxShadow="xl" zIndex={1}>
            <Flex
                p={3}
                alignItems="center"
                justifyContent="space-between"
            >
                <Box as={FiChevronLeft} fontSize={["3xl"]} color="primary" onClick={() => navigate('../', { replace: false })} cursor={"pointer"}/>
                <Image src={"https://www.mixtiles.com/images/logo.png"}/>
                <Menu>
                    <MenuButton>
                        <Box as={FiMenu} fontSize={["3xl"]} color="primary"/>
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={onOpen}>Frequent Questions</MenuItem>
                        <a href="javascript:void(Tawk_API.toggle())">
                            <MenuItem>Talk to Us</MenuItem>
                        </a>
                    </MenuList>
                </Menu>
            </Flex>
            <Modal onClose={onClose} isOpen={isOpen} isCentered scrollBehavior="inside">
                <ModalOverlay />
                <ModalContent height="75% !important" rounded="12px">
                    <ModalHeader>Frequent Questions</ModalHeader>
                    <ModalCloseButton top="14px"/>
                    <ModalBody>
                        <Flex d={'column'}>
                            {questionsAndAnswers}
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
            {/*<Flex*/}
            {/*    alignItems="center"*/}
            {/*    justifyContent="center"*/}
            {/*>*/}
            {/*    <Image cursor="pointer" src={white} w="75px" h="83px" onClick={()=>selectFrame('white')} backgroundImage={selectedFrame === 'white' ? "linear-gradient(0deg,rgba(255,0,149,.25),rgba(255,0,149,0))":undefined}/>*/}
            {/*    <Image cursor="pointer" src={black} w="75px" h="83px" onClick={()=>selectFrame('black')} backgroundImage={selectedFrame === 'black' ? "linear-gradient(0deg,rgba(255,0,149,.25),rgba(255,0,149,0))":undefined}/>*/}
            {/*    <Image cursor="pointer" src={mocha} w="75px" h="83px" onClick={()=>selectFrame('mocha')} backgroundImage={selectedFrame === 'mocha' ? "linear-gradient(0deg,rgba(255,0,149,.25),rgba(255,0,149,0))":undefined}/>*/}
            {/*    <Image cursor="pointer" src={latte} w="75px" h="83px" onClick={()=>selectFrame('latte')} backgroundImage={selectedFrame === 'latte' ? "linear-gradient(0deg,rgba(255,0,149,.25),rgba(255,0,149,0))":undefined}/>*/}
            {/*</Flex>*/}
        </Box>
    );
};

export default Header;