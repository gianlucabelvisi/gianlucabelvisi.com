import React from 'react';
import "@fontsource/pacifico"
require('typeface-dancing-script')
require('typeface-indie-flower')
require('typeface-irish-grover')

export const Song = ({children}) => {
    return (
        <div style={{
            fontFamily: "Indie Flower",
            paddingLeft: "5rem",
            fontSize: "1.4rem"
        }}>
            {children}
        </div>
    );
};

export const Pony = ({children}) => {
    return (
        <div style={{
            fontFamily: "Dancing Script",
            // paddingLeft: "5rem"
        }}>
            {children}
        </div>
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
        <div>

        </div>
    );
};


export const EvilQuote = ({children}) => {
    return (
        <div>

        </div>
    );
};


