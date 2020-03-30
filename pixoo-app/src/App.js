import React from "react";
import {Router} from "@reach/router";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import Home from "./pages/Home";
import Configurator from "./pages/Configurator";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";

export default () => (
    <ThemeProvider>
        <CSSReset />
        <Header/>
        <Router>
            <Home path="/" />
            <Configurator path="config" />
            <NotFound default/>
        </Router>
    </ThemeProvider>
);
