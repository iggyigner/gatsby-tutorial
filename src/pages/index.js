import React from "react"
import { Link } from "gatsby"
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <div>
      <h1>Hello folks!</h1>
      <Navbar />
      <div>
        {/* Can only use Link for internal links */}
        <Link to="/blog/">blog</Link>
      </div>
      <a href="https://www.gatsbyjs.org">gatsby docs</a>
    </div>
  )
}
