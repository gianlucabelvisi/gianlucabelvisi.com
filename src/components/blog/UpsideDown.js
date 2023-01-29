import React from 'react';
import styled from "styled-components";

// make the children upside down

const UpsideDown = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
};

export default UpsideDown;

const Wrapper = styled.div`
    transform: rotate(180deg);
`