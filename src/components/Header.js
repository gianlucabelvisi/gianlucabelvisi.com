import React, {useEffect, useState} from "react"
import {Link} from "gatsby"
import styled from 'styled-components'
import {FaBars} from 'react-icons/fa'
import DropdownMenu from "./DropdownMenu";
import {useScrollPosition} from "./hooks/useScrollPosition";
import DesktopMenu from "./DesktopMenu";
import {useStaticQuery, graphql} from "gatsby"
import Delayed from "./Delayed";

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
            let isShow = true
            if (currPos.y < -100) {
                isShow = currPos.y > prevPos.y
            }

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

    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      allSite {
        edges {
          node {
            siteMetadata {
              version
            }
          }
        }
      }
    }
  `)
    const version = data.allSite.edges[0].node.siteMetadata.version

    return (
        <Delayed>
            <Nav path={path} sticky={sticky}>
                <Logo>
                    <HomeLink to="/">
                        <Title>Gianluca's</Title>
                        <SubTitle>worthless piece of blog</SubTitle>
                    </HomeLink>
                    <Version to="/release-notes">
                        Version: {version}
                    </Version>
                </Logo>
                <DesktopMenu/>
                <MobileWrapper>
                    <Hamburger onClick={toggleDropdownOpen}/>
                    <DropdownMenu isDropdownOpen={isDropdownOpen} toggleDropdownOpen={toggleDropdownOpen}/>
                </MobileWrapper>
                <Background show={showBackground}/>
            </Nav>
        </Delayed>
    )
}

export default Header

const Nav = styled.nav`
  background: ${({path}) => (!path.includes("/index2") && path !== "/" ? "var(--nav-background-color)" : "transparent")};
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
const Version = styled(Link)`
  font-size: smaller;
  position: absolute;
  bottom: -5px;
  opacity: 0;
  transition: opacity 2s ease-in-out;
  color: var(--nav-font-color);
  text-decoration: none;
`
const HomeLink = styled(Link)`
  color: var(--nav-font-color);
  align-items: center;
  justify-content: center;
  text-decoration: none;
  display: flex;
  flex-direction: column;
`
const Logo = styled.div`
  color: var(--nav-font-color);
  display: flex;
  flex-direction: column;
  position: relative;
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

    ${Version} {
      opacity: 1;
    }
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
