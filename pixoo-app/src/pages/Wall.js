/*@jsx jsx*/
import { jsx , css } from "@emotion/core";
import React, { useState } from "react";
import {Flex, useDisclosure, Image, Input} from '@chakra-ui/core';
import Footer from "../components/Footer";
import FramedPicture from "../components/FramedPicture";
import videoBg from '../resources/sample.mp4';
import Header from "../components/Header";

function readAsDataURL(file) {
    return new Promise((resolve, reject)=>{
        let fileReader = new FileReader();
        fileReader.onload = function(){
            return resolve({src:fileReader.result, name:file.name, size: file.size, type: file.type, id:Date.now()});
        }
        fileReader.readAsDataURL(file);
    })
}

function Wall() {
    const imageUploaderRef = React.useRef();
    const [photosArray, setPhotosArray] = useState([])

    const handleImageUpload = async (e) => {
        let files = [...e.target.files];
        setPhotosArray(await Promise.all(files.map(f=>{return readAsDataURL(f)})));
    };

    const addNewPhoto  = (base64URLs, position) => {
        setPhotosArray(position === 'right' ?  photosArray => photosArray.concat(base64URLs): photosArray => base64URLs.concat(photosArray));
    }

    //const photosInFrames = photosArray.map((photo,index) => <FramedPicture key={photo.id}  photo={photo} index={index} length={photosArray.length} selectedFrame={selectedFrame} onCLickFrame={onCLickFrame}/>);

    const slides = photosArray.map((photo) => {
        const container = {};
        container.key=  photo.id,
        container.content = <img src={photo.src} alt="1" />
        return container;
    })

    return (
        <Flex direction="column" h="100%" width="100%" overflow="auto" justifyContent="space-between" alignItems="center">
           <Header onChangeFrame={null}/>
           {photosArray.length == 0 ? <video css={css`height: 100vh; width: 100%; object-fit: cover;`} autoPlay loop muted playsInline>
                <source src={videoBg} type='video/mp4' />
            </video>: null}
            <Input value={""} type="file" accept="image/*" onChange={handleImageUpload} multiple="multiple" ref={imageUploaderRef} display="none"/>
            <Footer onClickButton={() => {imageUploaderRef.current.click()}} text={"Add Your Photos"} buttonIsDisabled={false}/>
        </Flex>
    );
}

export default Wall;
