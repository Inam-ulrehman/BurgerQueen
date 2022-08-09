import React from 'react'
import { FaRegCopyright } from 'react-icons/fa'
import styled from 'styled-components'

import FooterPageOne from './FooterPageOne'

const Footer = () => {
  return (
    <Wrapper>
      <FooterPageOne />

      <div className='footer-box'>
        <FaRegCopyright />
        Copyright {new Date().getFullYear()} INAM Web Solutions. All Rights
        Reserved. Web Design and Content Management by INAM Web Solutions.
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  .footer-box {
    text-align: center;
    background-color: var(--grey-3);
    padding: 2rem;
  }
`

export default Footer
