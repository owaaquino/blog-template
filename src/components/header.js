import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

import Nav from "./Nav"

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  h1 a {
    text-decoration: none;
  }
`

export default function Header(){
  return(
    <HeaderStyle>
      <div>
        <h1 style={{ margin: 0 }}>
          <Link to="/" >
            Blog Template ( Sanity )
          </Link>
        </h1>
      </div>
    <Nav />
  </HeaderStyle>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
