import React from 'react'
import { Link } from 'gatsby'

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <div className="grid-wrapper">
        <div className="col-4">
          <p>Adresgegevens?</p>
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
