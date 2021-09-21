import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Montserrat Regular */
  @font-face {
    font-family: "Montserrat";
    font-weight: 400;
    font-style: normal;
    src: url("/fonts/Montserrat-Regular.woff2") format("woff2"), url("/fonts/Montserrat-Regular.woff") format("woff");
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* Montserrat Medium */
  @font-face {
    font-family: "Montserrat";
    font-weight: 500;
    font-style: normal;
    src: url("/fonts/Montserrat-Medium.woff2") format("woff2"), url("/fonts/Montserrat-Medium.woff") format("woff");
  }
  
  /* Montserrat Italic */
  @font-face {
    font-family: "Montserrat";
    font-weight: 400;
    font-style: italic;
    src: url("/fonts/Montserrat-Italic.woff2") format("woff2"), url("/fonts/Montserrat-Italic.woff") format("woff");
  }

  /* Montserrat SemiBold */
  @font-face {
    font-family: "Montserrat";
    font-weight: 600;
    font-style: normal;
    src: url("/fonts/Montserrat-SemiBold.woff2") format("woff2"), url("/fonts/Montserrat-SemiBold.woff") format("woff");
  }

  /* Bitter Bold */
  @font-face {
    font-family: "Bitter";
    font-weight: 700;
    font-style: bold;
    src: url("/fonts/Bitter-Bold.woff2") format("woff2"), url("/fonts/Bitter-Bold.woff") format("woff");
  }

  /* Bitter Regular */
  @font-face {
    font-family: "Bitter";
    font-weight: 400;
    font-style: normal;
    src: url("/fonts/Bitter-Regular.woff2") format("woff2"), url("/fonts/Bitter-Regular.woff") format("woff");
  }
  
  /* Bitter Italic */
  @font-face {
    font-family: "Bitter";
    font-weight: 400;
    font-style: italic;
    src: url("/fonts/Bitter-Italic.woff2") format("woff2"), url("/fonts/Bitter-Italic.woff") format("woff");
  }

  /* Bitter Bold */
  @font-face {
    font-family: "Bitter";
    font-weight: 700;
    font-style: bold;
    src: url("/fonts/Bitter-Bold.woff2") format("woff2"), url("/fonts/Bitter-Bold.woff") format("woff");
  }

  body {
    font-family: ${(props) => props.theme.font.family.default};
    font-size: ${(props) => props.theme.font.size.default};
    line-height: ${(props) => props.theme.lineHeight.default};
    letter-spacing: 0.07px;
    color: ${(props) => props.theme.color.text};
  }
`;

export default GlobalStyle;
