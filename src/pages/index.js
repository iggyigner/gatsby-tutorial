import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <h1>Hello folks!</h1>
      <div>
        {/* Can only use Link for internal links */}
        <Link to="/blog/">blog</Link>
      </div>
      <a href="https://www.gatsbyjs.org">gatsby docs</a>
    </Layout>
  )
}
