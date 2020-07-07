import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

import pic11 from '../assets/images/pic11.jpg'

const PersonalTrainingPage = props => (
  <Layout>
    <Helmet
      title="Personal Training met personal trainer in Alkmaar | VitaSupport"
      meta={[
        {
          name: 'description',
          content:
            'Personal training in Alkmaar onder gediplomeerde begeleiding. Wordt fit en gezond op verantwoorde wijze',
        },
        {
          name: 'keywords',
          content: 'personal training, personal trainer, alkmaar',
        },
      ]}
    ></Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Personal Training Alkmaar</h1>
            <h2>onder begeleiding fit worden en fit blijven</h2>
          </header>
          <span className="image main">
            <img src={pic11} alt="" />
          </span>
          <p>Personal Training bij VitaSupport</p>
          <p>
            Jij bent uniek, want geen mens is hetzelfde. Voor iedereen geldt dat
            een startpunt en uiteindelijke doel dan ook verschillend zijn. Bij
            VitaSupport stellen wij samen met jou je doelen vast en om jouw
            doelen te bereiken zullen wij je hierin begeleiden.
          </p>
          <p>
            Personal Training gaat verder dan alleen fysieke oefeningen. Bij
            Personal Training wordt je begeleid om jouw doelen na te streven. De
            trainingen en je algehele fitheid is hier een onderdeel van. Maar
            ook je eetgewoonten brengen we in kaart. Door met de gehele keten te
            werken – voeding, training, bewustzijn - ben jij straks in staat
            sneller en effectiever een optimaal resultaat te behalen.
          </p>
          <p>
            Bij Personal Training gaat de aandacht dan ook echt uit naar jou. De
            trainingen zijn één-op-één, met 100% aandacht van jouw persoonlijke
            begeleider. Er wordt voor jou een specifiek en effectief programma
            samengesteld. Geen korte termijn plan, want fit worden is één, maar
            fit blijven is misschien nog wel belangrijker. En dat is nu precies
            waar je samen met je personal trainer aan gaat werken.
          </p>
          <p>
            Zet nu de eerste stap naar een fit en gezond lichaam en maak een
            afspraak voor een intakegesprek, waarin we je fitheid bekijken, jouw
            doelen vaststellen en de mogelijkheden voor jouw begeleiding
            bespreken.
          </p>
          <ul className="actions">
            <li>
              <Link to="/contact" className="button">
                Neem contact op!
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
)

export default PersonalTrainingPage
