import {Flex, Button} from "@chakra-ui/core";
import React from "react";

function Footer ({
    onOpen
}) {
    return (
        <Flex
            p={4}
            bg="#ffffff"
            boxShadow="0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 -10px 10px -5px rgba(0, 0, 0, 0.04)"
            alignItems="center"
            justify="center"
            w="100%"
            zIndex={1}
        >
            <Button color="white" bg="#ff0072" size="lg"  width={["93%","93%","29%"]} rounded="12px" onClick={onOpen}>
                Button
            </Button>
        </Flex>
    );
};

export default Footer;