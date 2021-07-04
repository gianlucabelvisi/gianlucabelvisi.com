import React from 'react';
import styled from "styled-components";
import {menuData} from "../data/MenuData";
import DesktopMenuElement from "./DesktopMenuElement";

const DesktopMenu = () => {
    return (
        <MenuWrapper>
            {menuData.map((item, key) => (
                <DesktopMenuElement item={item} key={key}/>
            ))}
        </MenuWrapper>
    );
};

export default DesktopMenu;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
