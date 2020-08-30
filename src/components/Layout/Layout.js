import React from "react"

import './Layout.scss'
import Navbar from '../Navbar/Navbar.js'

const Layout = ({children}) => {
  return (
    <React.Fragment>
       <Navbar />
       {children}
    </React.Fragment>
  )
}

export default Layout
