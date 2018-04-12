import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Title, NavContainer } from './StyledComponents'
import logo from '../superjam-logo.svg'

// eslint-disable-next-line
class Nav extends Component {
  render() {
    return (
      <NavContainer>
        <Title>
          <logo />
          SuperJam{' '}
          <span role="img" aria-label="star emoji">
            💫
          </span>
        </Title>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/skaters">Skaters</NavLink>
          </li>
          <li>
            <NavLink to="/timer">Jam Timer</NavLink>
          </li>
        </ul>
      </NavContainer>
    )
  }
}

export default Nav
