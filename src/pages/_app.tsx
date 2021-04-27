import React, { useState } from "react";
import { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// import theme from "../styles/theme";
import { Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "../utils/utils";
import { Container } from "../components/common/container";
import Header from "../components/common/Navbar/header";
import Footer from "../components/common/Footer/footer";

// Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    200: "#FFCC80",
    300: "#FF8A65",
    400: "#EC407A",
    500: "#E5395",
    600: "#D32F2F",
    700: "#FBC02D",
   },
 }

 const theme = extendTheme({ colors })

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Container minH="100vh" minW="1080px">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Container>
      </Web3ReactProvider>
    </ChakraProvider>
  );
};

export default MyApp;
