import React from 'react';
import styled from "styled-components";
import {Link} from "gatsby";

const MenuElement = ({item}) => {
    if (item.subMenu.length === 0) {
        return (
            <MenuLink to={item.link}>
                {item.title}
            </MenuLink>
        )
    } else {
        return (
            <SubMenuWrapper>
                <NoLink>
                    {item.title}
                </NoLink>
                <SubMenuElement items={item.subMenu}/>
            </SubMenuWrapper>
        )
    }
};

export default MenuElement;

const SubMenuElement = ({items}) => {
    return (
        <SubMenuContainer>
            {items.map((item) => (
                <SubMenuLink to={item.link}>
                    {item.title}
                </SubMenuLink>
            ))}
        </SubMenuContainer>
    )
}

const MenuLink = styled(Link)`
  color: var(--nav-font-color);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 1rem;
  height: 100%;
  cursor: pointer;
`
const SubMenuLink = styled(MenuLink)`
  padding: 0.3rem;
  align-items: start;
  justify-content: start;
`
const SubMenuContainer = styled.div`
  color: var(--nav-font-color);
  transition: opacity 0.2s ease-in-out;
  text-decoration: none;
  position: absolute;
  padding: 1rem;
  background-color: var(--primary-color);
  width: 20ch;
  z-index: 10;
  border-radius: 10px;
  pointer-events: none;
  opacity: 0;
  &:before {
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    top: -10px;
    left: 35px;
    background: var(--primary-color);
    transform: rotate(45deg);
  }
`
const SubMenuWrapper = styled.div`
  height: 100%;
  z-index: 1;
  &:hover ${SubMenuContainer} {
    opacity: 1;
    pointer-events: all;
  }
`
const NoLink = styled(Link)`
  color: var(--nav-font-color);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 1rem;
  height: 100%;
  cursor: pointer;
`

