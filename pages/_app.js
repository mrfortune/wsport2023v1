import React from "react";
import PropTypes from "prop-types";
import createEmotionCache from "../utility/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import { NextUIProvider } from "@nextui-org/react";
//import createEmotionCache from '../utility/createEmotionCache';
import mytheme from "../styles/theme/mytheme";
import lightTheme from "../styles/theme/lightTheme";
import "../styles/globals.css";
// import '@nextcss/reset';
import Layout from "../components/Layout";

// let theme = createTheme();
// theme = responsiveFontSizes(lightTheme);

const clientSideEmotionCache = createEmotionCache();
function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  return (
  <CacheProvider value={emotionCache}>
    <NextUIProvider theme={mytheme}> 
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </NextUIProvider> 
    </CacheProvider>
  );
}

export default MyApp;
