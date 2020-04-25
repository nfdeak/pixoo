import {keyframes} from "@emotion/core";

export const pulse = keyframes`
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
export const fadeIn = keyframes`
      0% {
        opacity:0
      }
      100% {
        opacity:1
      }
    `