import {keyframes} from "@emotion/core";
import * as colors from '../utils/colors';
import {primary} from "../utils/colors";

export const pulse = keyframes`
      0% {
        transform: scale(.95);border:4px dashed grey; border-radius:12px; color: grey
      }
      50%{
        transform: scale(1);border:4px dashed ${primary};border-radius:12px; color: ${primary}
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

export const slideInFromBottom = keyframes`
      0% {
        max-height:0%
      }
      100% {
        max-height:100%
      }
    `