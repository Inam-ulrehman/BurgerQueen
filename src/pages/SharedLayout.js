import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer/Footer'
import MobileNavbar from '../components/navbar/MobileNavbar'

const SharedLayout = () => {
  return (
    <Wrapper>
      <MobileNavbar />
      <div className='main-section'>
        <Outlet />
      </div>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .main-section {
    overflow: hidden;
  }
  @media (min-width: 600px) {
    .main-section {
    }
  }
`

export default SharedLayout
