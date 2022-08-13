import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer/Footer'

import DesktopNavbar from '../components/navbar/DesktopNavbar'
import MobileNavbar from '../components/navbar/MobileNavbar'

const SharedLayout = () => {
  return (
    <Wrapper>
      <DesktopNavbar />
      <MobileNavbar />
      <section className='section'>
        <Outlet />
      </section>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  @media (max-width: 768px) {
    .section {
      margin-top: 3.7rem;
    }
  }
`

export default SharedLayout
