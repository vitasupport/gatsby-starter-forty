import React from 'react'
import Helmet from 'react-helmet'
import { navigate } from 'gatsby-link'
import Layout from '../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function ContactPage() {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

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
              onSubmit={handleSubmit}
            >
              {/* You still need to add the hidden input with the form name to your JSX form */}
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <label>
                  Don’t fill this out:{' '}
                  <input name="bot-field" onChange={handleChange} />
                </label>
              </div>
              <div className="field">
                <label htmlFor="name">Naam</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="phonenumber">Telefoonnummer</label>
                <input
                  type="text"
                  name="phonenumber"
                  id="phonenumber"
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="message">Bericht</label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  onChange={handleChange}
                />
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
}
