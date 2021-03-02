import React from "react"
import Layout from "../components/Layout"
// Because Header is a default export, you can import/name the component whatever you want
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"

//what's super cool here is you can create mutiple graphql queries in separate components
//and import them onto a single page. So you can have multiple graphql components per page
const examples = () => {
  return (
    <Layout>
      <h1>Hello from the Examples Page</h1>
      <Header />
      <HeaderStatic />
    </Layout>
  )
}

export default examples
