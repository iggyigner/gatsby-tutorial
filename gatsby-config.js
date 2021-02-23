/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  /* 
  RESTART SERVER EVERY TIME CHANGES MADE HERE

  For GraphQL... 
  CTRL + Space brings up autocomplete, and helps you find available fields in the Sandbox @ localhost:8000/___graphql 
  Whenever a field's value is an object, you MUST specifiy at least one of the fields inside that child object
  If a field's value is an array, graphql will automatically return the whole array

  In Explorer tab... 
  purple = argument
  blue with checkbox = field that has no subfields
  blue with triangle = field that has subfields

  site {
    siteMetadata {
      title
      description
      author
      data
      person {
        name
        age
      }
      people
    }
  }
  */
  siteMetadata: {
    title: "Iggy Gatsby Tutorial",
    description: "Tutorial from John Smigla @ Udemy",
    author: "@iggyigner",
    data: ["item 1", "item 2"],
    person: { name: "iggy", age: 33 },
    people: [
      { name: "iggy", age: 33 },
      { name: "john", age: 40 },
    ],
  },
  plugins: [`gatsby-plugin-styled-components`],
}
