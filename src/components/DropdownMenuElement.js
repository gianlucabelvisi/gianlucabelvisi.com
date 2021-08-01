import React, {useState} from "react";
import Link from "gatsby-link";
import styled from "styled-components"
import {AiFillCaretRight} from "react-icons/ai";

const DropdownElement = ({item}) => {

    const [isSubMenuOpen, setSubMenuOpen] = useState(false)
    const toggleSubMenuOpen = () => {
        setSubMenuOpen(!isSubMenuOpen)
    }

    if (item.subMenu.length === 0) {
        return (
            <DropdownLink to={item.link}>
                {item.title}
            </DropdownLink>
        );
    } else {
        return (
            <SubMenuContainer onClick={toggleSubMenuOpen}>
                <NoLink>
                    {item.title}
                    <SubMenuButton isopen={isSubMenuOpen}/>
                </NoLink>
                <SubMenuWrapper isopen={isSubMenuOpen}>
                    {item.subMenu.map((item, key) => (
                        <SubMenuLink to={item.link} key={key}>
                            {item.title}
                        </SubMenuLink>
                    ))}
                </SubMenuWrapper>
            </SubMenuContainer>
        )
    }
};

export default DropdownElement

const DropdownLink = styled(Link)`
  margin: 2rem;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  color: var(--font-color-light);
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    color: var(--accent-color);
  }
`
const SubMenuContainer = styled.div`
  position: relative;
  margin: 2rem;
`
const SubMenuWrapper = styled.div`
  transition: all 0.3s ease-in-out;
  display: ${({isopen}) => (isopen ? "block" : "none")};
`
const NoLink = styled.div`
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  color: var(--font-color-light);
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    color: var(--accent-color);
  }
`
const SubMenuButton = styled(AiFillCaretRight)`
  position: absolute;
  top: 3px;
  right: 40px;
  transform: ${({isopen}) => (isopen ? "rotate(90deg)" : "rotate(0deg)")};
`
const SubMenuLink = styled(DropdownLink)`
  margin: 2rem;
  padding-left: 2rem;
  display: block;
  font-size: 1.2rem;
`