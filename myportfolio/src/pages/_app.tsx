import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/global.styles";
import StyledThemeProvider from "../styles/theme/themeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StyledThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </StyledThemeProvider>
    </>
  );
}

export default MyApp;
