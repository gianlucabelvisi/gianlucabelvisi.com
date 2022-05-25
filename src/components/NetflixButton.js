import styled from "styled-components";
import {Link} from "gatsby";
import React from "react";
import {BsFillPlayFill} from "react-icons/bs";

export const NetflixButton = ({to}) => {
    return (
        <ButtonContainer to={to}>
            <BsFillPlayFill/>
        </ButtonContainer>
    );
};

const ButtonContainer = styled(Link)`
  background-color: ${props => props.theme.white};
  height: 2rem;
  color: ${props => props.theme.black};
  padding: .5rem;
  display: flex;
  margin: 0 .5rem 0 .5rem;
  align-items: center;
  justify-items: center;
  border-radius: 20px;
  
  transition: all 300ms ease;
  &:hover {
    transform: scale(1.2);
  }
`

const Temp = styled.div`
  background: ${props => props.theme.button.mainColor};
  color: ${props => props.theme.button.fontColor};
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: ${props => props.theme.button.borderRadius};
  padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
  overflow: hidden;
  cursor: pointer;
  text-indent: 23px;
  font-weight: bold;
  transition: all 1.2s, border 0.5s 1.2s, box-shadow 0.3s 1.5s;
  &:hover {
    text-indent: 0;
    background: ${props => props.theme.button.hoverColor};
    color: ${props => props.theme.button.fontColorHover};
    border: 3px solid ${props => props.theme.button.borderColor};
    box-shadow: 3px 3px 2px rgba(black, 0.15);
    
  }
`
