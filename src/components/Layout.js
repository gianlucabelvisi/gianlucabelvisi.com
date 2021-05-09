/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, {useState} from 'react'

import Header from './Header'
import {GlobalStyle} from "./styles/GlobalStyles";
import Footer from "./Footer";
import Dropdown from "./Dropdown";

const Layout = ({children}) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const toggleDropdownOpen = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    return (
        <>
            <GlobalStyle/>
            <Dropdown isDropdownOpen={isDropdownOpen} toggleDropdownOpen={toggleDropdownOpen}/>
            <Header toggleDropdownOpen={toggleDropdownOpen}/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}

export default Layout
