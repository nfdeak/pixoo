import {Flex, Button} from "@chakra-ui/core";
import React from "react";

function Footer ({}) {

    return (
        <Flex
            bg="#ffffff"
            height={"14%"}
            boxShadow="0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 -10px 10px -5px rgba(0, 0, 0, 0.04)"
            alignItems="center"
            justify="center"
            pos="fixed"
            w="100%"
            left="0"
            bottom="0"
        >
            <Button color="white" bg="#ff0072" size="lg"  width={["80%","80%","30%"]} rounded="12px">
                Button
            </Button>
        </Flex>
    );
};

export default Footer;