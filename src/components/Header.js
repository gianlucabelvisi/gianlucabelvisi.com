import React, {useState, useEffect} from "react"
import {Link} from "gatsby"
import styled from 'styled-components'
import {FaBars} from 'react-icons/fa'
import {menuData} from "../data/MenuData";
import Dropdown from "./Dropdown";
import MenuElement from "./MenuElement";
import {useScrollPosition} from "./hooks/useScrollPosition";

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const toggleDropdownOpen = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    const [path, setPath] = useState("")
    useEffect(() => {
        if (window.location.pathname) {
            setPath(window.location.pathname)
        }
    }, [])

    const [sticky, setSticky] = useState(false)

    useScrollPosition(
        ({prevPos, currPos}) => {
            const isShow = currPos.y > prevPos.y
            if (isShow !== sticky) setSticky(isShow)
        },
        [sticky]
    )

    return (
        <Nav path={path} sticky={sticky}>
            <HomeLink to="/">
                <Title>Gianluca's</Title>
                <SubTitle>worthless piece of blog</SubTitle>
            </HomeLink>
            <MenuWrapper>
                {menuData.map((item) => (
                    <MenuElement item={item}/>
                ))}
            </MenuWrapper>
            <MobileWrapper>
                <Hamburger onClick={toggleDropdownOpen}/>
                <Dropdown isDropdownOpen={isDropdownOpen} toggleDropdownOpen={toggleDropdownOpen}/>
            </MobileWrapper>
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
  background: ${({path}) => (path !== "/" ? "var(--nav-background-color)" : "transparent")};
  height: 80px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: fixed;
  transition: transform 0.5s ease-in 0.5s;
  transform: ${({sticky}) => (sticky ? "translateY(0)" : "translateY(-100%)")};

`
const HomeLink = styled(Link)`
  color: var(--nav-font-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 1rem;
  height: 100%;
  cursor: pointer;
`
const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
const Title = styled.div`
  font-size: larger;
`
const SubTitle = styled.div`
  font-size: smaller;
`
const Hamburger = styled(FaBars)`
  display: none;
  color: var(--font-color);
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
const MobileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`
