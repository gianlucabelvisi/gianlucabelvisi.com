import React from 'react';
import styled from "styled-components"
import {Button} from "./Button";
import {FaTimes} from "react-icons/all";
import {menuData} from "../data/MenuData";
import Link from "gatsby-link";


const Dropdown = ({isDropdownOpen, toggleDropdownOpen}) => {
    return (
        <Container isOpen={isDropdownOpen} onClick={toggleDropdownOpen}>
            <Icon onClick={toggleDropdownOpen}>
                <CloseIcon/>
            </Icon>
            <Wrapper>
                <Menu>
                    {menuData.map((item, index) => (
                        <DropdownLink to={item.link} key={index}>
                            {item.title}
                        </DropdownLink>
                    ))}
                </Menu>
                <ButtonWrap>
                    <Button round="true" to="/trips">
                        Book
                    </Button>
                </ButtonWrap>
            </Wrapper>
        </Container>
    );
};

export default Dropdown;

const Container = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? "1" : "0")};
  top: ${({isOpen}) => (isOpen ? "0" : "-100%")};
`
const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`
const CloseIcon = styled(FaTimes)`
  color: var(--font-color);
`
const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  color: var(--font-color);
  cursor: pointer;
  transition: 0.2s ease-in-out;
  
  &:hover {
    color: var(--accent-color);
  }
`

const Wrapper = styled.div`
  color: var(--font-color);
`
const Menu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 2rem;
  
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`
const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`
