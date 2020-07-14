import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/Layout'

export default ({ data }) => (
  <Layout>
    <Helmet>
      <title>Trainers | VitaSupport</title>
      <meta name="description" content="Trainers Page" />
    </Helmet>

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Trainers</h2>
          </header>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et
            feugiat tempus.
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link to="/trainers/winfred-van-groningen" className="image">
            <Img fluid={data.VitaSupport5.childImageSharp.fluid} />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Winfred</h3>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
                urna. Maecenas massa sed magna lacinia magna pellentesque lorem
                ipsum dolor. Nullam et orci eu lorem consequat tincidunt.
                Vivamus et sagittis tempus.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/trainers/winfred-van-groningen" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/hardlopen" className="image">
            <Img fluid={data.VitaSupport5.childImageSharp.fluid} />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Iemand Anders</h3>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
                urna. Maecenas massa sed magna lacinia magna pellentesque lorem
                ipsum dolor. Nullam et orci eu lorem consequat tincidunt.
                Vivamus et sagittis tempus.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/hardlopen" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    VitaSupport5: file(relativePath: { eq: "VitaSupport-5.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 640) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
