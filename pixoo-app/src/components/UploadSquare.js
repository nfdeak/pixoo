/*@jsx jsx*/
import { jsx , css } from "@emotion/core";
import {Flex, Box, Input, Icon} from "@chakra-ui/core";
import React from "react";
import {FiPlus} from "react-icons/fi";
import * as keyframes from '../utils/keyframes';

function UploadSquare({
                          onUploadPhoto,
                          isAnimating,
                          position
                      }) {
    const imageUploaderRef = React.useRef();
    const id = Date.now();

    const handleImageUpload = e => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            reader.onload = e => {
                onUploadPhoto(e.target.result,position);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
            <Flex id={id}
                  bg="hsla(0,0%,100%,.7)"
                  minH="238px"
                  minW="238px"
                  rounded="12px"
                  alignItems="center"
                  justifyContent="center"
                  onClick={() => {imageUploaderRef.current.click(); document.getElementById(id).scrollIntoView({ inline: 'center',behavior: 'smooth' })}}
                  cursor="pointer"
                  border='4px dashed grey'
                  color='grey'
                  css={isAnimating? css`animation: ${keyframes.pulse} 1.7s linear infinite;animation-play-state:running; &:hover {animation-play-state:paused;}` : undefined}
            >
                <Box as={FiPlus} fontSize="45px"/>
                <Input value={""} type="file" accept="image/*" onChange={handleImageUpload} ref={imageUploaderRef} display="none"/>
            </Flex>
    );
};

export default UploadSquare;