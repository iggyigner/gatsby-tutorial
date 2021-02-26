import React from "react"
import Layout from "../components/Layout"
// Because Header is a default export, you can import/name the component whatever you want
import Header from "../examples/Header"

const examples = () => {
  return (
    <Layout>
      <h1>Hello from the Examples Page</h1>
      <Header />
    </Layout>
  )
}

export default examples
