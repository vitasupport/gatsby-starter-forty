import React from 'react'

const Footer = props => (
  <footer id="footer">
    <div className="inner">
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
