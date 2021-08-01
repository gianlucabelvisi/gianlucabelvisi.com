import { createGlobalStyle } from "styled-components"

require('typeface-roboto')

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #e87c48;
    --primary-color-darker: #bd643a;
    --primary-color-lighter: #ff9664;
    --secondary-color: #1275da;
    --secondary-color-darker: #135291;
    --secondary-color-lighter: #2c8eef;
    
    --font-color-light: white;
    --font-color-dark: black;
    
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

  p {
    margin-bottom: 1rem;
  }

`