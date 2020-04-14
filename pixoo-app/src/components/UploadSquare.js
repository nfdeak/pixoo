import {Flex, Box} from "@chakra-ui/core";
import React from "react";
import { AnimateKeyframes } from "react-simple-animate";
import { FiPlus  } from "react-icons/fi";

function UploadSquare ({}) {

    return (
        <Flex  mx={5}>
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
                            {0:' transform: scale(.95); color: grey'},{50:' transform: scale(1); color:#ff0072'},{100:' transform: scale(.95); color:grey'},
                        ]}
                    >
                    <Box as={FiPlus} fontSize="45px" />
                    </AnimateKeyframes>
                </Flex>
            </AnimateKeyframes>
        </Flex>
    );
};

export default UploadSquare;