import { Global, css } from '@emotion/core'
import React from "react";
import {Router} from "@reach/router";
import { theme, ThemeProvider, CSSReset } from "@chakra-ui/core";
import Home from "./pages/Home";
import Wall from "./pages/Wall";
import NotFound from "./pages/NotFound";
import PaymentSuccess from "./pages/PaymentSuccess";
import {primary} from "./utils/colors";

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export const newTheme = {
    ...theme,
    breakpoints,
    shadows: { ...theme.shadows, outline: "none"},
    colors: { ...theme.colors, primary: primary},
};

export default () => (
    <ThemeProvider theme={newTheme}>
        <CSSReset />
        <Global styles={css`*,*:focus {outline: none !important;}`}/>
        <Router>
            <Wall path="/" />
            <PaymentSuccess path="success" />
            <NotFound default/>
        </Router>
    </ThemeProvider>
);
