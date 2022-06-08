import React from 'react'
import Header from '../shared/header'

const Layout = ({ children }) => {
    return (
        <div><Header />{children}</div>
    )
}

export default Layout