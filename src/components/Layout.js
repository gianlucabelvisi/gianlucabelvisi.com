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

const Layout = ({children, isDark = false}) => {

    return (
        <>
            <GlobalStyle/>
            <ThemeProvider theme={Theme}>
                <Container isDark={isDark}>
                    <Header/>
                    <Main>{children}</Main>
                    <Footer/>
                </Container>
            </ThemeProvider>
        </>
    )
}

export default Layout

const Container = styled.main`
  background-color: ${props => props.isDark ? props.theme.bgColorDark : props.theme.bgColor};
`
const Main = styled.main`
`