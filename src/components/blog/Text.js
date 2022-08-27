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
            fontFamily: "Irish Grover",
            fontSize: "1.9rem",
            paddingBottom: "1.5rem",
            paddingLeft: "2rem",
            paddingRight: "2rem"
        }}>
            {children}
        </div>
    );
};

export const Dialogue = ({children}) => {
    return (
        <div style={{
            fontFamily: "Irish Grover",
            fontSize: "1.5rem",
            paddingBottom: "1.5rem",
            paddingLeft: "1rem",
            paddingRight: "1rem"
        }}>
            {children}
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
            marginTop: ".5rem"
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
            marginBottom: "2rem",
            lineHeight: "1.5rem"
        }}>
            <em>{children}</em>
        </div>
    );
};

