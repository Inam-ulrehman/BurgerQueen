import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import Address from './Address'
import CopyRight from './CopyRight'
import SocialMedia from './SocialMedia'
import Subscribe from './Subscribe'

const Footer = () => {
  return (
    <Wrapper>
      <div className='logo-holder'>
        <Logo />
      </div>
      <div className='social-media'>
        <Subscribe />
        <SocialMedia />
        <Address />
      </div>
      <CopyRight />
    </Wrapper>
  )
}
const Wrapper = styled.footer`
  background-color: var(--primary-1);
  .logo-holder {
    text-align: center;
    margin: 1rem auto;
  }
  .social-media {
    div {
      margin: 1rem auto;
    }
  }
`
export default Footer
