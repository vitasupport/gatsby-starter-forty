import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function GoogleMaps() {
  return (
    <StaticQuery
      query={graphql`
        query StaticMapQuery {
          staticMap {
            childFile {
              childImageSharp {
                fluid {
                  # or fixed
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Img fluid={data.file.childImageSharp.fluid} alt="Google Maps" />
      )}
    />
  )
}
