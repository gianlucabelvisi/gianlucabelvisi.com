import React, {useEffect, useState} from "react"
import {Link} from "gatsby"
import styled from 'styled-components'
import {FaBars} from 'react-icons/fa'
import DropdownMenu from "./DropdownMenu";
import {useScrollPosition} from "./hooks/useScrollPosition";
import DesktopMenu from "./DesktopMenu";

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

    const [sticky, setSticky] = useState(true)

    useScrollPosition(
        ({prevPos, currPos}) => {
            const isShow = currPos.y > prevPos.y
            if (isShow !== sticky) {
                setSticky(isShow)
                if (path === "/" && !sticky) {
                    setShowBackground(true)
                }
            }
        },
        [sticky],
        null,
        false,
        30
    )

    const [showBackground, setShowBackground] = useState(false)


    return (
        <Nav path={path} sticky={sticky}>
            <HomeLink to="/">
                <Title>Gianluca's</Title>
                <SubTitle>worthless piece of blog</SubTitle>
            </HomeLink>
            <DesktopMenu/>
            <MobileWrapper>
                <Hamburger onClick={toggleDropdownOpen}/>
                <DropdownMenu isDropdownOpen={isDropdownOpen} toggleDropdownOpen={toggleDropdownOpen}/>
            </MobileWrapper>
            <Background show={showBackground}/>
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
  z-index: 20;
  position: fixed;
  transition: top 1s ease-in 0.5s;
  top: ${({sticky}) => (sticky ? "0" : "-100%")};
`

const Background = styled.div`
  background: rgba(0, 0, 0, 0.1);
  display: ${({show}) => (show ? "block" : "none")};
  margin-top: -1rem;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 9;
  pointer-events: none;
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
  z-index: 20;
  transition: transform .2s;
  &:hover {
    transform: scale(1.2);
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
  color: var(--font-color-light);
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
