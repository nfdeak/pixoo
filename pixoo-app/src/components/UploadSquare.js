/*@jsx jsx*/
import { jsx , css } from "@emotion/core";
import {Flex, Box, Input, Icon} from "@chakra-ui/core";
import React from "react";
import {FiPlus} from "react-icons/fi";
import * as keyframes from '../utils/keyframes';

function UploadSquare({onUploadPhoto, isAnimating, position}) {
    const imageUploaderRef = React.useRef();

    const handleImageUpload = async (e) => {
        let files = [...e.target.files];
        let images = await Promise.all(files.map(f=>{return readAsDataURL(f)}));
        onUploadPhoto(images, position);
    };

    function readAsDataURL(file) {
        return new Promise((resolve, reject)=>{
            let fileReader = new FileReader();
            fileReader.onload = function(){
                return resolve({src:fileReader.result, name:file.name, size: file.size, type: file.type, id:Date.now()});
            }
            fileReader.readAsDataURL(file);
        })
    }

    return (
            <Flex id={position}
                  bg="hsla(0,0%,100%,.7)"
                  maxH={["244px"]}
                  minH={["244px"]}
                  minW={["244px"]}
                  maxW={["244px"]}
                  rounded="12px"
                  alignItems="center"
                  justifyContent="center"
                  onClick={() => {imageUploaderRef.current.click(); document.getElementById(position).scrollIntoView({ block: 'center',behavior: 'smooth' })}}
                  cursor="pointer"
                  border='4px solid grey'
                  color='grey'
                  css={isAnimating? css`animation: ${keyframes.pulse} 1.7s linear infinite;animation-play-state:running; &:hover {animation-play-state:paused;}` : undefined}
            >
                <Box as={FiPlus} fontSize="45px"/>
                <Input value={""} type="file" accept="image/*" onChange={handleImageUpload} multiple="multiple" ref={imageUploaderRef} display="none"/>
            </Flex>
    );
};

export default UploadSquare;