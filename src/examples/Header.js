import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
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
  `)
  return (
    <>
      <h2>Author: {data.site.siteMetadata.author}</h2>
      <h2>Age: {data.site.siteMetadata.people[0].age}</h2>
      <h2>Title: {data.site.siteMetadata.title}</h2>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </>
  )
}

export default ComponentName
