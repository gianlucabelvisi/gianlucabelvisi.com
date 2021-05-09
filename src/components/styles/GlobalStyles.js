import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #F26A2E;
    --secondary-color: #077BF1;
    --font-color: white;
    --background-color: transparent;
    --accent-color: var(--primary-color);
  }
    
  * {
   font-family: 'Roboto', sans-serif;
   margin: 0;
   padding: 0;
   box-sizing: border-box;
  }
`