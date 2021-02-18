import React from "react"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <h1 style={{ color: "green", textTransform: "capitalize" }}>
        Hello folks, we in "Main" inside Layout!
      </h1>
      <a href="https://www.gatsbyjs.org">gatsby docs</a>
    </Layout>
  )
}
