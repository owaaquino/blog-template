import React from 'react'
import Footer from './Footer'
import Header from './Header'
import styled from 'styled-components'
import Theme, {theme} from '../theme'

const SiteLayout = styled.div`
  max-width: ${theme.breakpoints.wide};
  margin: 1rem auto;
  height: 100vh;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`

export default function Layout({children}) {
  return (
    <Theme>
      <SiteLayout>
        <Header />
        <Wrapper>
          <main>
            {children}
          </main>
          <Footer />
        </Wrapper>
        </SiteLayout>
    </Theme>
  )
}