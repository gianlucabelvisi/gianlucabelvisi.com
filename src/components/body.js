import React from 'react'

const Body = ({children}) => {
    return (
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0 1rem 1.45rem`,
            }}
        >

            {children}

        </div>
    )
}

export default Body
