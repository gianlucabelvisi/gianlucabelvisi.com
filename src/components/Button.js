import styled from 'styled-components'
import { Link } from 'gatsby'


import React from 'react';

const LinkButton = ({children, onHover}) => {
    return (
        <Wrapper>
            {children}
            <OnHover>{onHover}</OnHover>
        </Wrapper>
    );
};
export default LinkButton;

export const SubmitButton = ({children, onHover}) => {
    return (
        <LinkButton as="button" type = "submit" onHover={onHover}>
            {children}
        </LinkButton>
    );
};

const OnHover = styled.span`
  display: inline-block;
  transform: translateX(300px);
  font-weight: normal;
  opacity: 0;
  width: 0;
  padding: 0;
  transition: opacity 0.1s 0.5s, transform 0.4s 0.5s, width 0.4s 0.5s, padding-left 0.4s 0.5s;
`
const Wrapper = styled(Link)`
  background: var(--button-color);
  color: var(--button-font-color);
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  border-radius: var(--button-border-radius);
  padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
  overflow: hidden;
  cursor: pointer;
  text-indent: 23px;
  font-weight: bold;
  transition: all 1.2s, border 0.5s 1.2s, box-shadow 0.3s 1.5s;
  &:hover {
    text-indent: 0;
    background: var(--button-color-hover);
    color: var(--button-font-color-hover);
    border: 10px solid var(--button-border-color);
    box-shadow: 3px 3px 2px rgba(black, 0.15);
    ${OnHover} {
      transform: translateX(0);
      opacity: 1;
      width: 6ch;
      padding-left: 1ch;
    }
  }
`