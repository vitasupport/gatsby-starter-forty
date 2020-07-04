import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Contact from '../components/Contact'

const ContactPage = props => (
  <Layout>
    <Helmet title="Wordt fitter, sterker en vermijd blessures, meld je aan | VitaSupport"></Helmet>
    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Contact</h1>
          </header>
          Inhoud?
        </div>
      </section>
    </div>
  </Layout>
)

export default ContactPage
