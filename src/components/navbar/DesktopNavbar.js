import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'

const DesktopNavbar = () => {
  return (
    <Wrapper>
      <Logo />
      DesktopNavbar
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  @media (max-width: 678px) {
    display: none;
  }
`
export default DesktopNavbar
