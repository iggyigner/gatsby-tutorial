import React from "react"
import Layout from "../components/Layout"
// Because ExampleButton was a node module export (export const ExampleButton...) instead of export default ###
// You must put it in curly brackets
import { ExampleButton } from "../components/button"

export default function Home() {
  return (
    <Layout>
      <h1 style={{ color: "green", textTransform: "capitalize" }}>
        Hello folks, we in "Main" inside Layout!
      </h1>
      <a href="https://www.gatsbyjs.org">gatsby docs</a>
      <ExampleButton>Click Me</ExampleButton>
    </Layout>
  )
}
