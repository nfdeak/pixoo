import {Flex, Box, Input} from "@chakra-ui/core";
import React from "react";
import {AnimateKeyframes} from "react-simple-animate";
import {FiPlus} from "react-icons/fi";

function UploadSquare({
    onUploadPhoto
}) {
    const imageUploaderRef = React.useRef();

    const handleImageUpload = e => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            reader.onload = e => {
                onUploadPhoto(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <AnimateKeyframes
            play={true}
            pause={false}
            iterationCount="infinite"
            direction="normal"
            duration={1.5}
            keyframes={[
                {0: ' transform: scale(.95);border:4px solid grey; border-radius:12px; color: grey'}, {50: ' transform: scale(1);border:4px solid #ff0072;border-radius:12px; color: #ff0072'}, {100: ' transform: scale(.95);border:4px solid grey;border-radius:12px; color: grey'},
            ]}
        >
            <Flex
                bg="hsla(0,0%,100%,.7)"
                h="238px"
                w="238px"
                rounded="12px"
                alignItems="center"
                justifyContent="center"
                onClick={() => imageUploaderRef.current.click()}
                cursor="pointer"
            >
                <Box as={FiPlus} fontSize="45px"/>
                <Input type="file" accept="image/*" onChange={handleImageUpload} ref={imageUploaderRef} display="none"/>
            </Flex>
        </AnimateKeyframes>
    );
};

export default UploadSquare;