import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentName = () => (
  <StaticQuery
    query={graphql`
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
    `}
    // data is the convention for the parameter that contains what the graphql query gets back
    // however, it's just a parameter, so you could name it whatever you want
    // The render prop was used back in the day before React hooks, which is set equal to a function
    // whose parameter has access to the data passed back from the graphql query. Then it would render whatever
    // the render prop's function return value was
    render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
  ></StaticQuery>
)

export default ComponentName
