import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import BannerLanding from '../components/BannerLanding'

export default ({ data }) => (
  <Layout>
    <Helmet
      title="Personal Trainer en hardloop training in Alkmaar | VitaSupport"
      meta={[
        {
          name: 'description',
          content:
            'Personal training en hardlooptraining door gediplomeerde personal trainers in Alkmaar',
        },
        {
          name: 'keywords',
          content:
            'personal, trainer, personal trainer, gediplomeerd, personal training, hardloop trainer, hardloop training, hardlopen',
        },
      ]}
    ></Helmet>

    <BannerLanding />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h3>Intro</h3>
          </header>
          <p>
            Fit worden en gezond blijven op verantwoorde wijze, dat is waar
            VitaSupport voor staat. Bij VitaSupport ondersteunen wij je hierin.
            Als Personal Trainer, hardlooptrainer of bootcamp begeleider.
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link to="/personal-training" className="image">
            <Img fluid={data.VitaSupport3.childImageSharp.fluid} />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Personal training</h3>
              </header>
              <p>
                Personal Training, waar je één-op-één wordt begeleid waarbij
                alle aandacht naar jou uitgaat en waar je op basis van een
                persoonlijk plan begeleiding krijgt.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/personal-training" className="button">
                    Lees verder &gt;
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="button">
                    Neem contact op!
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/hardlopen" className="image">
            <Img fluid={data.VitaSupport3.childImageSharp.fluid} />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Hardlopen</h3>
              </header>
              <p>
                Harlooptraining, om blessurevrij en op verantwoorde wijze hard
                te lopen, is looptechniek van groot belang. Dit trainen wij jou
                in small group training of tijdens privé sessies.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/hardlopen" className="button">
                    Lees verder &gt;
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="button">
                    Neem contact op!
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/personal-training" className="image">
            <Img fluid={data.VitaSupport3.childImageSharp.fluid} />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Bootcamp</h3>
              </header>
              <p>
                Bootcamp, waar onder begeleiding gewerkt wordt aan verbetering
                van je fysiek. Een training die in groepjes plaatsvindt. Lekker
                in de buitenlucht samen, maar wel verantwoord, sporten.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/contact" className="button">
                    Neem contact op!
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
    VitaSupport3: file(relativePath: { eq: "VitaSupport-3.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 640) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
