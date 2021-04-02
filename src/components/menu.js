import React from 'react'
import Link from 'gatsby-link'

import './layout.css'
import './menu.css'

const Menu = () => {
    return (
        <div className={'menu'}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li>Blog</li>
                <li>None</li>
            </ul>
        </div>
    )
}

export default Menu
