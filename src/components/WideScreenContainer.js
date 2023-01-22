import React from 'react';
import styled from "styled-components";

const WideScreenContainer = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  padding: 5rem calc((100vw - 1300px) / 2);
`

export default WideScreenContainer;