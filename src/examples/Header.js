import React from "react"
// useStaticQuery is a reactHook from Gatsby, graphql is a tag template from gatsby
// tag templates are a JS thing, not a gatsby thing. Here they contain the query between the template literal ticks
// whereas with styled components, they contain the css
// For useStaticQuery, all normal react hook rules apply:
// 1) must be used with a functional component
// 2) must be used INSIDE the function, otherwise will get an error
import { useStaticQuery, graphql } from "gatsby"

// you can add an alias to any field by simply typing the alias name followed by a colon in front of the field
// be sure to update your destructuring obj / view template with this new alias (can no longer use the original)
const getData = graphql`
  {
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
const ComponentName = () => {
  // can place query markup inside useStaticQuery directly, or do like this - totally up to you
  // const data = useStaticQuery(getData)
  // OR
  // use destructuring (unpack the properties to variables so you don't need to drill down so deeply)
  // what variables you type in your destructuring obj must have the same names as the object properties you're unpacking
  const {
    site: {
      info: {
        author,
        title,
        person: { age },
      },
    },
  } = useStaticQuery(getData)

  return (
    <>
      {/* <h2>Author: {data.site.siteMetadata.author}</h2>
      <h2>Age: {data.site.siteMetadata.people[0].age}</h2>
      <h2>Title: {data.site.siteMetadata.title}</h2> 
      <pre>{JSON.stringify(data, null, 4)}</pre> */}
      <h2>Author: {author}</h2>
      <h2>Age: {age}</h2>
      <h2>Title: {title}</h2>
    </>
  )
}

export default ComponentName
