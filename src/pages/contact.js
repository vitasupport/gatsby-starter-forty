import React from 'react'
import Helmet from 'react-helmet'
import { navigateTo } from 'gatsby-link'
import Recaptcha from 'react-google-recaptcha'
import Layout from '../components/Layout'

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class ContactPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleRecaptcha = value => {
    this.setState({ 'g-recaptcha-response': value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
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
                method="post"
                action="/bedankt/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                data-netlify-recaptcha="true"
                onSubmit={this.handleSubmit}
              >
                {/* You still need to add the hidden input with the form name to your JSX form */}
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label htmlFor="name">Naam</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="field">
                  <label htmlFor="phonenumber">Telefoonnummer</label>
                  <input
                    type="text"
                    name="phonenumber"
                    id="phonenumber"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="field">
                  <label htmlFor="message">Bericht</label>
                  <textarea
                    name="message"
                    id="message"
                    rows="6"
                    onChange={this.handleChange}
                  />
                </div>
                <Recaptcha
                  ref="recaptcha"
                  sitekey={RECAPTCHA_KEY}
                  onChange={this.handleRecaptcha}
                />
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
  }
}
