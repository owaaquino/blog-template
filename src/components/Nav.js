import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const NavStyle = styled.nav`
  a {
    margin-right: 20px;
    color: #000000;
  }
`

export default function Nav(){
  return (
    <NavStyle>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
    </NavStyle>
  )
}