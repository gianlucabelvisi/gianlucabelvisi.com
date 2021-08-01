import React from 'react';
import styled from "styled-components";
import {Link} from "gatsby";

const DesktopMenuElement = ({item}) => {
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

export default DesktopMenuElement;

const SubMenuElement = ({items}) => {
    return (
        <SubMenuContainer>
            {items.map((item, key) => (
                <SubMenuLink to={item.link} key={key}>
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
  position: relative;
  z-index: 20;
  transition: transform .2s;
  &:hover {
    transform: scale(1.2);
  }
`
const SubMenuLink = styled(MenuLink)`
  padding: 0.3rem;
  align-items: start;
  justify-content: start;
  transition: transform .2s;
  &:hover {
    transform: scale(1.2);
  }
`
const SubMenuContainer = styled.div`
  color: var(--nav-font-color);
  transition: opacity 0.2s ease-in-out;
  text-decoration: none;
  position: absolute;
  padding: 1rem;
  background-color: var(--primary-color);
  width: 20ch;
  z-index: 20;
  border-radius: 10px;
  pointer-events: none;
  opacity: 0;
  &:before {
    position: absolute;
    content: ''; // we just need this mofo
    background: var(--primary-color);
    width: 20px;
    height: 20px;
    top: -10px;
    left: 35px;
    transform: rotate(45deg);
  }
`
const SubMenuWrapper = styled.div`
  height: 100%;
  z-index: 20;
  &:hover ${SubMenuContainer} {
    opacity: 1;
    pointer-events: all;
  }
`
const NoLink = styled.div`
  color: var(--nav-font-color);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 1rem;
  height: 100%;
  cursor: inherit;
  &:hover {
    transform: scale(1.2);
  }
`

