import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      <h1>Hello folks!</h1>
      {/* Can only use Link for internal links */}
      <Link to="/blog/">blog</Link>
      <a href="https://www.gatsbyjs.org">gatsby docs</a>
    </div>
  )
}
