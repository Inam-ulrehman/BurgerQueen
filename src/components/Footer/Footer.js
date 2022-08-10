import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import SocialMedia from '../SocialMedia'
import Subscribe from '../Subscribe'
import Address from '../Address'
import CopyRight from '../CopyRight'

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

const Wrapper = styled.div`
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
