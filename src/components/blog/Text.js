import React from 'react';
import "@fontsource/pacifico"
import styled from "styled-components";

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
  @media screen and (max-width: 500px) {
    padding-left: 2rem;
    font-size: 1.1rem;
  }
`

export const Pony = ({children}) => {
    return (
        <div style={{
            fontFamily: "Dancing Script",
            fontSize: "2rem"
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

export const Quote = ({children}) => {
    return (
        <QuoteWrapper>
            <h1>" {children} "</h1>
        </QuoteWrapper>
    );
};
const QuoteWrapper = styled.div`
  position: relative;
  margin-block: 1.5rem;
  padding-block: 3rem;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: ${props => props.theme.accentColor};
  width: 100%;
  display: block;
  border-radius: 30px;
  color: white;

  &:before {
    content: 'quote';
    position: absolute;
    left: 10px;
    top: 0;
    text-transform: uppercase;
  }
  &:after {
    content: '/quote';
    position: absolute;
    right: 10px;
    bottom: 0;
    text-transform: uppercase;
  }
  
`


export const EvilQuote = ({children}) => {
    return (
        <div>

        </div>
    );
};

export const FigureLabel = ({children}) => {
    return (
        <div style={{
            width: "100%",
            textAlign: "center",
            marginBottom: "2rem"
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
            marginBottom: "1rem"
        }}>
            <em>{children}</em>
        </div>
    );
};

