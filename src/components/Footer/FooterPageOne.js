import React from 'react'
import { navbarData } from '../../utils/data'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo'

import SocialMedia from '../SocialMedia'
import Subscribe from '../Subscribe'

const FooterPageOne = () => {
  return (
    <Wrapper>
      <div className='style'></div>
      <Logo className='logo' />
      <div className='bar'>
        {navbarData.map((item) => {
          const { id, path, title } = item
          return (
            <li key={id}>
              <NavLink to={path}>{title}</NavLink>
            </li>
          )
        })}
      </div>
      <div className='social-media'>
        <Subscribe />
        <SocialMedia />
      </div>
      <div className='address'>
        <h4>OUR ADDRESS</h4>
        <div className='address-p'>
          <p>86 cedart street,Kitchener, ON, ON N2H 6R4</p>
        </div>
        <p>
          phone: <span>4165606790</span>
        </p>
        <p>
          Toll-Free: <span>4165606790</span>
        </p>
        <p>
          Email: <span>inam6530@hotmail.com</span>
        </p>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.ul`
  .logo {
    padding-bottom: 1rem;
    text-align: center;
  }
  .social-media {
    div {
      margin: 0 auto;
    }
  }
`

export default FooterPageOne
