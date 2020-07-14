import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../../components/Layout'

export default ({ data }) => (
  <Layout>
    <Helmet>
      <title>Winfred van Groningen | VitaSupport</title>
      <meta name="description" content="Trainer Winfred van Groningen Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Winfred van Groningen</h1>
            <h2>Personal trainer, hardloop- & voedingspecialist</h2>
          </header>
          <span className="image main">
            <Img fluid={data.VitaSupport9.childImageSharp.fluid} />
          </span>
          <p>
            Als founder van VitaSupport in 2013 kan ik als specialist bogen op
            zeer ruime ervaring op het gebied van sport en voeding. Als Personal
            Trainer zet ik deze kennis en kunde in om mensen ‘beter’ te maken.
            Een beter fysiek en een verbeterde fitheid.
          </p>
          <p>
            Wat hier vaak wordt vergeten is ook het verbeterd bewustzijn, waar
            je je bewust bent van waar je mee bezig bent. Of dit nu het
            nastreven van je fitheid doelen is, het verantwoord verliezen van
            gewicht of gewoon in het dagelijkse leven. Als personal trainer help
            ik je om op bewuste wijze fitter en gezonder te worden. Fit en sterk
            worden op verantwoorde wijze? Ik kan je hiermee helpen!
          </p>
          <p>
            Vanuit gedegen kennis en ervaring begeleid ik mensen met het behalen
            en ook behouden van hun doelstellingen.
          </p>
          <p>
            VitaSupport heeft een eigen studio; ideaal voor mensen die niets
            hebben met het onpersoonlijke van een sportschool of diegene die net
            dat duwtje in de rug nodig hebben om sportief bezig te zijn.
          </p>
          <p>
            Dat ik gecertificeerd ben als personal trainer en herstel trainer
            betekent voor jou alleen maar dat je bij VitaSupport in goede handen
            bent.
          </p>
          <p>
            Certificaten: NASM Certified Personal Trainer, NASM Corrective
            Exercise Specialist, Anatomie AALO, HBO Voedingsdeskundige, HvA
            Sportvoedingsadviseur, Triggerpoint therapie
          </p>
        </div>
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
