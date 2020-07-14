import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../components/Layout'

export default ({ data }) => (
  <Layout>
    <Helmet
      title="Hardlopen met hardlooptrainer in Alkmaar | VitaSupport"
      meta={[
        {
          name: 'description',
          content:
            'Leer hardlopen onder begeleiding, met looptechniek en fysieke training in Alkmaar',
        },
        {
          name: 'keywords',
          content: 'hardlopen, hardlooptraing, blessurevrij',
        },
      ]}
    ></Helmet>

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Hardloop training Alkmaar</h1>
            <h2>onder begeleiding vertantwoord leren hardlopen</h2>
          </header>
          <p>
            Hardlopen is misschien wel de meest beoefende sport in Nederland.
            Overal en altijd zie je mensen alleen of in kleine groepjes
            hardlopen. Maar is hardlopen wel zo gezond? Niet, als je
            looptechniek niet in orde is. Dan liggen fysiek ongemak en
            blessuregevoeligheid op de loer.
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Img
            className="image"
            fluid={data.VitaSupport9.childImageSharp.fluid}
          />
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Hardlopen en moet je leren</h3>
              </header>
              <p>
                Een goede looptechniek draagt zorg voor een gezond lichaam en
                verminderd de kans op blessures. Daarom <i>leer</i> je bij
                VitaSupport om hard te lopen. Bij VitaSupport wordt je niet
                alleen de juiste looptechniek aangeleerd, maar wordt ook
                aandacht besteed aan spierkracht en je ‘core stability’. De
                ‘core stability’ of kernstabiliteit zorgt voor een goede
                houding, waardoor je prestaties verbeteren en je minder
                blessuregevoelig bent. Hierdoor krijg je meer plezier in
                hardlopen en verbeteren je loopprestaties.
              </p>
            </div>
          </div>
        </section>
        <section>
          <Img
            className="image"
            fluid={data.VitaSupport9.childImageSharp.fluid}
          />
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Small group training</h3>
              </header>
              <p>
                Bij VitaSupport wordt in kleine groepjes hardgelopen. Groepjes
                van gelijkwaardig niveau, zodat iedere deelnemer op zijn of haar
                niveau kan instromen. Van beginner tot (ver)gevorderd.
              </p>
              <p>
                Ben je er niet zeker van of je tempo’s in de groep aan kunt, of
                heb je een voorkeur voor individuele hardloopbegeleiding, dan
                kan je ook privé sessies afspreken voor één-op-één begeleiding.
              </p>
            </div>
          </div>
        </section>
        <section>
          <Img
            className="image"
            fluid={data.VitaSupport9.childImageSharp.fluid}
          />
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Hardlopen in Alkmaar</h3>
              </header>
              <p>
                De hardlooptrainingen vinden plaats op diverse buitenlocaties in
                het zuidelijk deel van Alkmaar. Op plaatsen zonder veel last van
                verkeer, zodat de focus gelegd kan worden op looptechniek,
                training en voor het hebben van plezier in het hardlopen.
              </p>
              <p>
                Meld je nu aan en maak kennis met VitaSupport, de start van een
                gezond en fit leven.
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
    VitaSupport9: file(relativePath: { eq: "VitaSupport-9.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 640) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
