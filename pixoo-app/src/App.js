import React from "react";
import {Router} from "@reach/router";
import { theme, ThemeProvider, CSSReset, Grid } from "@chakra-ui/core";
import Home from "./pages/Home";
import Review from "./pages/Review";
import NotFound from "./pages/NotFound";

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
    ...theme,
    breakpoints
};

export default () => (
    <ThemeProvider theme={newTheme}>
        <CSSReset />
        <Router>
            <Home path="/" />
            <Review path="review" />
            <NotFound default/>
        </Router>
    </ThemeProvider>
);
