import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "../context/ThemeContext";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
