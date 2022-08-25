// import { Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'

const MobileNavbar = () => {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  )
}
const Wrapper = styled.nav`
  /* =====Logo==== */
  .sc-bczRLJ {
    max-width: 280px;
    overflow: hidden;
    margin: 0 auto;
  }
`
export default MobileNavbar
