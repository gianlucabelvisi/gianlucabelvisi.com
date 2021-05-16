import { createGlobalStyle } from "styled-components"

require('typeface-roboto')

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #F26A2E;
    --secondary-color: #077BF1;
    --background-color: transparent;
    --accent-color: var(--primary-color);
    --font-color: white;
    --nav-background-color: #141414;
    --nav-font-color: white;

    --button-color: var(--primary-color);
    --button-color-hover: var(--secondary-color);
    --button-border-color: #9fbeff;
    --button-border-radius: 50px;
    --button-font-color: white;
    --button-font-color-hover: #d9d2d2;
  }

  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`