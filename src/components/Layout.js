import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
// Because it's not a JS file,  you need to write the full extension
// This is also a global css file, which means there is no name scoping, you need to maintain diff names for all classes yourself
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
