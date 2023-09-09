import React from 'react';
import "@fontsource/pacifico"
import styled from "styled-components";
import {ImQuotesLeft, ImQuotesRight} from "react-icons/im";

require('typeface-dancing-script')
require('typeface-indie-flower')
require('typeface-irish-grover')
require('typeface-fredoka-one')

export const Song = ({children}) => {
    return (
        <SongWrapper>
            {children}
        </SongWrapper>
    );
};
const SongWrapper = styled.div`
  font-family: "Indie Flower", sans-serif;
  padding-left: 4rem;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  @media screen and (max-width: 500px) {
    padding-left: 2rem;
    font-size: 1.1rem;
  }
`

export const Pony = ({children, fontSize = "1.4rem"}) => {
    return (

        <div style={{
            fontFamily: "Irish Grover",
            fontSize: fontSize,
            paddingBottom: "1.5rem",
            paddingLeft: "3rem",
            paddingRight: "3rem"
        }}>
            {children}
        </div>
    );
};

export const Dialogue = ({children, withQuotesBegin= true, withQuotesEnd= true}) => {
    return (
        <div style={{
            lineHeight: "1.9rem"
        }}>
            <span style={{
                marginLeft: "1.5rem"
            }}/>
            {withQuotesBegin && <GlyphLeft/>}
            {children}
            {withQuotesEnd && <GlyphRight/>}
            {withQuotesEnd && <MarginBottom size={"1.5rem"}/>}
        </div>
    );
};

export const Formula = ({children}) => {
    return (
        <div style={{
            width: "100%",
            fontSize: "1.9rem",
            paddingTop: "1.5rem",
            paddingBottom: "1.7rem",
            textAlign: "center"
        }}>
            {children}
        </div>
    );
};

export const NewLine = () => {
    return (
        <p style={{
            marginBottom: "0",
        }}>
        </p>
    );
};

export const Break = () => {
    return (
        <p style={{
            marginBottom: "1rem",
        }}>
        </p>
    );
};

export const Question = ({children}) => {
    return (
        <div style={{
            fontFamily: "Irish Grover",
            marginTop: "2rem",
            marginBottom: "1rem",
            paddingLeft: "1rem",
            fontSize: "1.3rem"
        }}>
            <strong style={{
                fontFamily: "Irish Grover",
                fontSize: "1.3rem",
                paddingRight: "1rem"
            }}>
                Question:
            </strong>
            {children}
        </div>
    );
};


export const FigureLabel = ({children}) => {
    return (
        <div style={{
            width: "100%",
            textAlign: "center",
            marginBottom: "2rem",
            marginTop: ".5rem",
            paddingLeft: "4rem",
            paddingRight: "4rem",
            textWrap: "balance"
        }}>
            <em>{children}</em>
        </div>
    );
};

export const Indented = ({children}) => {
    return (
        <div style={{
            width: "100%",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            marginTop: "2rem",
            marginBottom: "2rem",
            lineHeight: "1.6rem"
        }}>
            <em>{children}</em>
        </div>
    );
};

export const MarginBottom = ({size}) => {
    return (
        <div style={{
            width: "100%",
            marginBottom: size
        }}>
        </div>
    );
}


export const Center = ({children}) => {
    return (
        <div style={{
            alignContent: "center",
            alignItems: "center"
        }}>
            {children}
        </div>
    );
};

export const BlogSubTitle = ({children}) => {
    return (
        <div>
            <SubTitle>
                <GlyphLeft/>{children}<GlyphRight/>
            </SubTitle>
        </div>
    );
};

const GlyphLeft = styled(ImQuotesLeft)`
  color: ${props => props.theme.accentColor};
  margin-right: .5rem;
`
const GlyphRight = styled(ImQuotesRight)`
  color: ${props => props.theme.accentColor};
  margin-left: .5rem;
`
const SubTitle = styled.div`
  margin-bottom: 2rem;
  text-align: left;
  font-size: larger;
`

