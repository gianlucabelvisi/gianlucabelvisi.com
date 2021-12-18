import React from 'react';
import styled from "styled-components";

const TextBox = ({children, title}) => {
    return (
        <Wrapper>
            <Title>
                <strong>{title}</strong>
            </Title>
            {children}
        </Wrapper>
    );
};

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  border-left: ${props => props.theme.accentColor} 3px solid;
  padding: 1rem;
  margin-bottom: 1rem;
`
const Title = styled.div`
  text-transform: uppercase;
  padding-bottom: 1rem;
`

export default TextBox

