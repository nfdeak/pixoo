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
                    <Flex my={2} justifyContent="space-between"><Text>{nrOfPhotos} {nrOfPhotos===1 ? 'tile':'tiles'}</Text><Text>US${nrOfPhotos*oneTilePrice}</Text></Flex>
                    <Flex my={2} justifyContent="space-between"><Text>Shipping</Text><Text>Free</Text></Flex>
                    <Flex mt={2} mb={6} justifyContent="space-between"><Text fontSize="xl" fontWeight="bold">Total</Text><Text fontSize="xl" fontWeight="bold">
                        US${nrOfPhotos*oneTilePrice}
                    </Text></Flex>
                    <PayPalButton
                        amount={nrOfPhotos*oneTilePrice}
                        shippingPreference="GET_FROM_FILE"
                        style={{color:'blue', shape:'pill', height:45, label:'pay'}}
                        onSuccess={(details, data) => {
                            alert("Transaction completed by " + details.payer.name.given_name);
                            // // OPTIONAL: Call your server to save the transaction
                            // return fetch("/paypal-transaction-complete", {
                            //     method: "post",
                            //     body: JSON.stringify({
                            //         orderID: data.orderID
                            //     })
                            // });
                        }}
                        options={{
                            clientId: "AePihhh1D3viVFYRT-2AewK94LJHaPSJoCK4TEJB9q1LKVTmPll8zOs-5cdJ0AeWcoxttbcmNiD3huuX"
                        }}
                    />
                    <Flex h={['80px','80px','80px','0px']} />
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
}

export default PaymentDrawer;
