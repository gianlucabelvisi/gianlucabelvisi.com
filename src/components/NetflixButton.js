import styled from "styled-components";
import {Link} from "gatsby";
import React from "react";
import {BsFillPlayFill} from "react-icons/bs";

export const NetflixButton = ({to, big, children}) => {
    return (
        <ButtonContainer to={to} big={big}>
            <Icon>
                <BsFillPlayFill/>
            </Icon>
            <Label big={big}>
                {children}
            </Label>
        </ButtonContainer>
    );
};

const ButtonContainer = styled(Link)`
  background-color: ${props => props.theme.white};
  height: ${({big}) => (big ? "3" : "2")}rem;
  width: ${({big}) => (big ? "8" : "2")}rem;
  color: ${props => props.theme.bgColorDark};
  text-decoration: none;
  padding: .5rem;
  display: flex;
  margin: 0 .5rem 0 .5rem;
  align-items: center;
  justify-items: center;
  align-content: center;
  justify-content: center;
  border-radius: ${({big}) => (big ? "8" : "20")}px;
  font-size: ${({big}) => (big ? "2" : "1")}rem;
  transition: all 300ms ease;
  &:hover {
    transform: scale(1.2);
  }
`

const Icon = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
  justify-items: center;
`

const Label = styled.div`
  display: ${({big}) => (big ? "block" : "none")};
  font-size: 1rem;
`
