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
import ReactTooltip from "react-tooltip";

const Layout = ({children, fullScreen = false, isDark = false}) => {

    return (
        <>
            <GlobalStyle/>
            <ThemeProvider theme={Theme}>
                <ReactTooltip effect="solid" backgroundColor="#ff9664"/>
                <Container isDark={isDark}>
                    {fullScreen ? null : <Header/>}
                    <Main>{children}</Main>
                    {fullScreen ? null : <Footer/>}
                </Container>
            </ThemeProvider>
        </>
    )
}

export default Layout

const Container = styled.main`
  overflow: ${props => props.isDark ? "hidden" : "visible"};
  background-color: ${props => props.isDark ? props.theme.bgColorDark : props.theme.bgColor};
`
const Main = styled.main`
`