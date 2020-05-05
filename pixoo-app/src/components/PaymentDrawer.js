/*@jsx jsx*/
import { jsx , css } from "@emotion/core";
import React from "react";
import {Drawer, DrawerHeader, DrawerOverlay, DrawerContent, DrawerBody, Flex, Text, DrawerCloseButton} from '@chakra-ui/core';
import { PayPalButton } from "react-paypal-button-v2";
import {threeTilesPrice, oneTilePrice} from "../utils/businessValues";

function PaymentDrawer({isOpen, onClose, nrOfPhotos}) {
    return (
        <Drawer placement={["right"]} isOpen={isOpen} onClose={onClose} size={"sm"}>
            <DrawerOverlay/>
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader borderBottomWidth="1px" fontWeight={900}>Checkout</DrawerHeader>
                <DrawerBody overflow="scroll">
                    <Flex my={2} justifyContent="space-between"><Text>3 tiles for US${threeTilesPrice}</Text><Text>US${threeTilesPrice}</Text></Flex>
                    <Flex my={2} justifyContent="space-between"><Text>Shipping</Text><Text>Free</Text></Flex>
                    {nrOfPhotos>3 ? <Flex mt={2} justifyContent="space-between"><Text>{nrOfPhotos-3} more {nrOfPhotos-3===1 ? 'tile':'tiles'}</Text><Text>US${(nrOfPhotos-3)*oneTilePrice}</Text></Flex>:null}
                    <Flex mt={2} mb={6} justifyContent="space-between"><Text fontSize="xl" fontWeight="bold">Total</Text><Text fontSize="xl" fontWeight="bold">
                        US${threeTilesPrice+(nrOfPhotos > 3 ? (nrOfPhotos-3)*9 : 0) }
                    </Text></Flex>
                    <PayPalButton
                        amount={58+((nrOfPhotos-3)*9)}
                        shippingPreference="GET_FROM_FILE"
                        style={{color:'blue', shape:'pill', height:45, label:'pay'}}
                        onSuccess={(details, data) => {
                            alert("Transaction completed by " + details.payer.name.given_name);
                        }}
                        options={{
                            clientId: "AePihhh1D3viVFYRT-2AewK94LJHaPSJoCK4TEJB9q1LKVTmPll8zOs-5cdJ0AeWcoxttbcmNiD3huuX"
                        }}
                    />
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
}

export default PaymentDrawer;
