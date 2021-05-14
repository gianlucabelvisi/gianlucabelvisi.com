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
  }
    
  * {
   font-family: 'Roboto', sans-serif;
   margin: 0;
   padding: 0;
   box-sizing: border-box;
  }
`