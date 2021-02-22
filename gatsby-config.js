/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
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
