import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Contact from '../components/Contact'

import pic11 from '../assets/images/pic11.jpg'

const Generic = props => (
  <Layout>
    <Helmet>
      <title>Contact | VitaSupport</title>
      <meta name="description" content="Generic Page" />
    </Helmet>

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Contact</h1>
          </header>
          <Contact />
        </div>
      </section>
    </div>
  </Layout>
)

export default Generic
