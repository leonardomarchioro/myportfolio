import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";

import { GlobalStyle } from "../styles/global.styles";
import StyledThemeProvider from "../styles/theme/themeProvider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoadingProvider } from "../LoadingProvider";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StyledThemeProvider>
        <LoadingProvider>
          <GlobalStyle/>
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
        </LoadingProvider>
      </StyledThemeProvider>
    </>
  );
}

export default MyApp;
