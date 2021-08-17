/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react'

import Header from './Header'
import {GlobalStyle} from "./styles/GlobalStyles";
import Footer from "./Footer";
import {ThemeProvider} from "styled-components";
import Theme from "./styles/Theme";
import styled from "styled-components"


const Layout = ({children}) => {

    return (
        <>
            <GlobalStyle/>
            <Header/>
            <WiP>Work in Progress</WiP>
            <ThemeProvider theme={Theme}>
                <Main>{children}</Main>
            </ThemeProvider>
            <Footer/>
        </>
    )
}

export default Layout

const WiP = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  opacity: .2;
  font-size: clamp(7rem, 3vw, 15rem);
  z-index: 10;
`
const Main = styled.main`
  background-color: ${props => props.theme.bgColor};
`