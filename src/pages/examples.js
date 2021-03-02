import React from "react"
import Layout from "../components/Layout"
// Because Header is a default export, you can import/name the component whatever you want
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import { graphql } from "gatsby"

//what's super cool here is you can create mutiple graphql queries in separate components
//and import them onto a single page. So you can have multiple graphql components per page
// Here, we use the useStaticQuery hook (most common and newest), StaticQuery (a component that makes the query and the you
// import it), and finally a PageQuery (makes a call for data from a page, allowing you to programatically create pages)
const examples = ({ data }) => {
  // Gatsby makes a bunch of info available to the props object by default - just place props in the () above and then
  // console.log(props) to see it. Once you add the export const data = graphql`...` below, you'll see the data
  // object show up inside the props object
  // Here, we will destructure just to pull out the data, and you can fully or partially destructure wherever you want - personal preference
  // you can add the data object to this by setting up a PageQuery, which allows you
  // to programmatically setup pages that pull data
  // Important: You can place StaticQuery inside pages, but you cannot place PageQuery anywhere other than a page
  // console.log(props)

  const {
    site: {
      info: { description },
    },
  } = data

  return (
    <Layout>
      <h1>Hello from the Examples Page</h1>
      <Header />
      <HeaderStatic />
      <h4>{description}</h4>
    </Layout>
  )
}

export const data = graphql`
  query MyQuery {
    site {
      info: siteMetadata {
        author
        data
        description
        people {
          age
          name
        }
        title
        person {
          age
          name
        }
      }
    }
  }
`
export default examples
