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
    
    --font-color-light: #fafafb;
    --font-color-dark: black;
    
    --nav-background-color: var(--secondary-color-darker);
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
  }

`