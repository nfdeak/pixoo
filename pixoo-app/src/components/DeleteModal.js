/*@jsx jsx*/
import { jsx , css } from "@emotion/core";
import React from "react";
import {Modal, ModalOverlay, ModalContent, Flex, PseudoBox} from "@chakra-ui/core";
import * as keyframes from '../utils/keyframes';

function DeleteModal({isOpen, onClose, onDeletePhoto}) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent rounded="12px" width={'85%'} position="absolute" left="50%" bottom="0" m={0} css={css`animation: ${keyframes.slideInFromBottom} .5s ease both;`} top="undefined !important">
                <Flex direction="column" width="100%" alignItems="center" >
                    <Flex alignItems="center" w={"100%"}> <PseudoBox
                        as="button"
                        height="55px"
                        width={'100%'}
                        borderTopRightRadius={"12px"}
                        borderTopLeftRadius={"12px"}
                        fontSize="18px"
                        fontWeight="bold"
                        bg="lightgrey"
                        color="white"
                        onClick={onClose}
                    >
                        Close
                    </PseudoBox></Flex>
                    <Flex alignItems="center" w={"100%"}> <PseudoBox
                        as="button"
                        height="55px"
                        width={'100%'}
                        fontSize="18px"
                        fontWeight="bold"
                        bg="primary"
                        color="white"
                        borderBottomRightRadius={"12px"}
                        borderBottomLeftRadius={"12px"}
                        onClick={onDeletePhoto}
                    >
                        Delete
                    </PseudoBox></Flex>
                </Flex>
            </ModalContent>
        </Modal>
    );
}

export default DeleteModal;
