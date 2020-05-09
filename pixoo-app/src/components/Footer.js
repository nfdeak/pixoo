import {Flex, PseudoBox} from "@chakra-ui/core";
import React from "react";

function Footer ({onClickButton, text}) {
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
            <PseudoBox
                as="button"
                height="50px"
                width={["93%","93%","43%", "29%","20%"]}
                rounded="12px"
                fontSize="18px"
                fontWeight="bold"
                bg="primary"
                color="white"
                onClick={onClickButton}
            >
                {text}
            </PseudoBox>
        </Flex>
    );
};

export default Footer;