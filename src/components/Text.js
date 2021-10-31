import React from 'react';
import "@fontsource/pacifico"
require('typeface-dancing-script')
require('typeface-indie-flower')

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
        <div>

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


