/*@jsx jsx*/
import { jsx , css } from "@emotion/core";
import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,Button
} from "@chakra-ui/core";

function ModallComponent({isOpen, onClose}) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>

                </ModalBody>

                <ModalFooter>
                    <Button variantColor="blue" mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button variant="ghost">Secondary Action</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default ModallComponent;
