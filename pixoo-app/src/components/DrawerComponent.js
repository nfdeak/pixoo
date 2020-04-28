/*@jsx jsx*/
import { jsx , css } from "@emotion/core";
import React from "react";
import {Drawer, DrawerHeader, DrawerOverlay, DrawerContent} from '@chakra-ui/core';

function DrawerComponent({isOpen, onClose}) {
    return (
        <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
            <DrawerOverlay/>
            <DrawerContent>
                <DrawerHeader>Create your account</DrawerHeader>
            </DrawerContent>
        </Drawer>
    );
}

export default DrawerComponent;
