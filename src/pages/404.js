import React from "react"
import Seo from "../components/Seo"
import {GlobalStyle} from "../components/styles/GlobalStyles";
import styled, {ThemeProvider} from "styled-components";
import Theme from "../components/styles/Theme";
import Header from "../components/Header";
import ContentContainer from "../components/ContentContainer";

const NotFoundPage = () => (
    <>
        <GlobalStyle/>
        <ThemeProvider theme={Theme}>
            <Header/>
            <Seo title="404: Not found"/>
            <ContentContainer>
                <Title>404: Not Found</Title>
                <p>You just hit a route that doesn&#39;t exist. Click the links above to find your way back to
                    civilization.</p>
            </ContentContainer>
        </ThemeProvider>
    </>
)

export default NotFoundPage

const Title = styled.h1`
  margin-top: 4rem;
  margin-bottom: 2rem;
`

