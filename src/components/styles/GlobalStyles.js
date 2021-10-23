import { createGlobalStyle } from "styled-components"

require('typeface-roboto')

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #e87c48;
    --primary-color-darker: #bd643a;
    --primary-color-lighter: #ff9664;
    --secondary-color: #135291;
    --secondary-color-darker: #0b3966;
    --secondary-color-lighter: #205b95;

    --font-color-light: #fafafb;
    --font-color-dark: black;

    --nav-background-color: var(--secondary-color);
    --nav-font-color: var(--font-color-light);

  }

  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.5rem;
  }

  h3 {
    padding-bottom: 0.4rem;
  }

`