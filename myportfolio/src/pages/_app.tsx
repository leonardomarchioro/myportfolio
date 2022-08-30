import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";

import { GlobalStyle } from "../styles/global.styles";
import StyledThemeProvider from "../styles/theme/themeProvider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StyledThemeProvider>
        <GlobalStyle />
        <NextUIProvider>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Component {...pageProps} />
        </NextUIProvider>
      </StyledThemeProvider>
    </>
  );
}

export default MyApp;
