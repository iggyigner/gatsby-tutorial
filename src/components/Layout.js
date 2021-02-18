import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
// Because it's not a JS file,  you need to write the full extension
import "./layout.css"

const Layout = ({ children }) => {
  return (
    // Empty brackets = React Fragments, so you don't need to use another div - simple as that
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
