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
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-recaptcha="true"
          >
            {/* You still need to add the hidden input with the form name to your JSX form */}
            <input type="hidden" name="form-name" value="contact" />
            <div className="field">
              <label htmlFor="name">Naam</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="phonenumber">Telefoonnummer</label>
              <input type="text" name="phonenumber" id="phonenumber" />
            </div>
            <div className="field">
              <label htmlFor="message">Bericht</label>
              <textarea name="message" id="message" rows="6"></textarea>
            </div>
            <div data-netlify-recaptcha="true"></div>
            <ul className="actions">
              <li>
                <input
                  type="submit"
                  value="Verstuur bericht"
                  className="special"
                />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
        </div>
      </section>
    </div>
  </Layout>
)

export default ContactPage
