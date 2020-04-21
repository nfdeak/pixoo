/*@jsx jsx*/
import { jsx , css, keyframes } from "@emotion/core";
import {Flex, Box, Input, Icon} from "@chakra-ui/core";
import React from "react";
import {FiPlus} from "react-icons/fi";

function UploadSquare({
                          onUploadPhoto,
                          isAnimating
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

    const pulse = keyframes`
      0% {
        transform: scale(.95);border:4px dashed grey; border-radius:12px; color: grey
      }
      50%{
        transform: scale(1);border:4px dashed #ff0072;border-radius:12px; color: #ff0072
      }
      100% {
        transform: scale(.95);border:4px dashed grey;border-radius:12px; color: grey
      }
    `

    return (
            <Flex
                bg="hsla(0,0%,100%,.7)"
                minH="238px"
                minW="238px"
                rounded="12px"
                alignItems="center"
                justifyContent="center"
                onClick={() => imageUploaderRef.current.click()}
                cursor="pointer"
                border='4px dashed grey'
                color='grey'
                css={isAnimating? css`animation: ${pulse} 1.7s linear infinite;animation-play-state:running; &:hover {animation-play-state:paused;}` : undefined}
            >
                <Box as={FiPlus} fontSize="45px"/>
                <Input value={""} type="file" accept="image/*" onChange={handleImageUpload} ref={imageUploaderRef} display="none"/>
            </Flex>
    );
};

export default UploadSquare;