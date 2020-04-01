import {Flex} from "@chakra-ui/core";
import React from "react";
import { AnimateKeyframes } from "react-simple-animate";

function UploadSquare ({}) {

    return (
        <AnimateKeyframes
            play={true}
            pause={false}
            iterationCount="infinite"
            direction="normal"
            duration={1.5}
            keyframes={[
                {0:' transform: scale(.95);border:4px dashed grey; border-radius:12px'},{50:' transform: scale(1);border:4px dashed #ff0072;border-radius:12px'},{100:' transform: scale(.95);border:4px dashed grey;border-radius:12px'},
            ]}
        >
            <Flex
                bg="hsla(0,0%,100%,.7)"
                height="210px"
                w="210px"
            >
            </Flex>
        </AnimateKeyframes>
    );
};

export default UploadSquare;