import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { NavContainer } from './StyledComponents'
import { Logo } from './Logo'

const LogoContainer = styled.div`
  max-width: 250px;
  padding: 15px;
  svg {
    width: 100%;
    fill: white;
  }
`

// eslint-disable-next-line
class Nav extends Component {
  render() {
    // console.log(logo)
    return (
      <NavContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
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
