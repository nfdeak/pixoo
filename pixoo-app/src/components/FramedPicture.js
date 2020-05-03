import { jsx , css } from "@emotion/core";
import React,{ useState }from "react";
import {Grid, Image, Spinner, Flex} from "@chakra-ui/core";
import * as keyframes from '../utils/keyframes';

function FramedPicture ({onCLickFrame, photo, index, length, selectedFrame}) {
    const [isFramePictureLoading, setIsFramedPictureLoading] = useState(true);
    return (
        <Grid m={2} onClick={() => onCLickFrame(photo.id)} id={length===1 ? 'last' : index === 0 ? 'first': index+1 === length ? 'last' : undefined} h={["253px"]} w={["253px"]}  css={css`animation: ${keyframes.fadeIn} 0.5s ease;`} cursor="pointer">
            {isFramePictureLoading && <Flex  gridArea="1 / 1" justifyContent="center" alignItems="center"><Spinner size="xl" thickness="4px" color="gray.600" emptyColor="gray.100" speed="0.65s"/></Flex>}
            <Image maxW="100%" display={isFramePictureLoading && 'none'} maxH="100%" minW="100%" minH="100%" p={2} src={photo.src} objectFit="cover" gridArea="1 / 1" onLoad={() => setIsFramedPictureLoading(false)}/>
            <Image src={selectedFrame} gridArea="1 / 1"/>
        </Grid>
    );
};

export default FramedPicture;