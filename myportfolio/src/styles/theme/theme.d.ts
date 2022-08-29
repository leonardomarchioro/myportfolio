import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColors: {
      general: string;
      primary: string;
      secondary: string;
    };
    titleColors: {
      primary: string;
      secondary: string;
    };
    subTitleColors: {
      primary: string;
      secondary: string;
    };
    textColors: {
      primary: string;
      secondary: string;
    };
    inputColors: {
      backgroud: string;
      placeholder: string;
    };
    buttonColors: {
      background: {
        primary: string;
        secondary: string;
      };
      color: {
        primary: string;
        secondary: string;
      };
    };
    spanBox: {
      background: string;
      color: string;
    };
  }
}
