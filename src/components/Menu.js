import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
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
    <a className="close" onClick={props.onToggleMenu} href="javascript:;">
      Close
    </a>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
