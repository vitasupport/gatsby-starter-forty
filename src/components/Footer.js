import React from 'react'
import { Link } from 'gatsby'

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <div className="grid-wrapper">
        <div className="col-4">
          <p>
            VitaSupport
            <br />
            Koelmalaan 330
            <br />
            1812 PS Alkmaar
            <br />
            T: 06 22445302
            <br />
            E: <Link to="/contact">contact</Link>
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2422.323597073319!2d4.7611640156370125!3d52.61799613671469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47cf563020ec9807%3A0xd5e7f25e368e844!2sVitaSupport!5e0!3m2!1snl!2snl!4v1594130711193!5m2!1snl!2snl"
            width="300"
            height="225"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        <div className="col-4">
          <ul className="alt links">
            <li>
              <Link onClick={props.onToggleMenu} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={props.onToggleMenu} to="/personal-training">
                Personal Training
              </Link>
            </li>
            <li>
              <Link onClick={props.onToggleMenu} to="/hardlopen">
                Hardlopen
              </Link>
            </li>
            <li>
              <Link onClick={props.onToggleMenu} to="/trainers">
                Trainers
              </Link>
            </li>
            <li>
              <Link onClick={props.onToggleMenu} to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link onClick={props.onToggleMenu} to="/aanmelden">
                Aanmelden
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <ul className="icons">
            <li>
              <a href="#" className="icon alt fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon alt fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon alt fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <ul className="copyright">
        <li>Disclaimer</li>
        <li>Algemene voorwaarden</li>
        <li>
          Copyright &copy; {new Date().getFullYear()}. All rights reserved.
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
