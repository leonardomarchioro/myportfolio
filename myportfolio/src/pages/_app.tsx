import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";

import { GlobalStyle } from "../styles/global.styles";
import StyledThemeProvider from "../styles/theme/themeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StyledThemeProvider>
        <GlobalStyle />
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </StyledThemeProvider>
    </>
  );
}

export default MyApp;
