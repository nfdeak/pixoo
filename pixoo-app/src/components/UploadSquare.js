import {Flex, Box} from "@chakra-ui/core";
import React from "react";
import { AnimateKeyframes } from "react-simple-animate";
import { FiPlus  } from "react-icons/fi";

function UploadSquare ({}) {

    return (
        <AnimateKeyframes
            play={true}
            pause={false}
            iterationCount="infinite"
            direction="normal"
            duration={1.5}
            keyframes={[
                {0:' transform: scale(.95);border:4px solid grey; border-radius:12px'},{50:' transform: scale(1);border:4px solid #ff0072;border-radius:12px'},{100:' transform: scale(.95);border:4px solid grey;border-radius:12px'},
            ]}
        >
            <Flex
                bg="hsla(0,0%,100%,.7)"
                h="230px"
                w="230px"
                rounded="12px"
                alignItems="center"
                justifyContent="center"
            >
                <AnimateKeyframes
                    play={true}
                    pause={false}
                    iterationCount="infinite"
                    direction="normal"
                    duration={1.5}
                    keyframes={[
                        {0:' transform: scale(.95)'},{50:' transform: scale(1)'},{100:' transform: scale(.95)'},
                    ]}
                >
                <Box as={FiPlus} fontSize="45px" color="#ff0072" />
                </AnimateKeyframes>
            </Flex>
        </AnimateKeyframes>
    );
};

export default UploadSquare;