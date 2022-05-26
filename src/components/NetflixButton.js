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
