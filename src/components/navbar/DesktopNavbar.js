import React from 'react'
import { navbarData } from '../../utils/data'
import DesktopNavbarComponent from './DesktopNavbarComponent'
import Logo from '../Logo'
import styled from 'styled-components'

const DesktopNavbar = () => {
  return (
    <DesktopNavbarWrapper>
      <div className='nav-container'>
        <div className='logo-container'>
          <Logo />
        </div>
        <div className='navbar'>
          <ul>
            {navbarData.map((item) => {
              return <DesktopNavbarComponent key={item.id} {...item} />
            })}
          </ul>
        </div>
      </div>
    </DesktopNavbarWrapper>
  )
}

// Css Styled Components==================

const DesktopNavbarWrapper = styled.nav`
  @media (max-width: 768px) {
    display: none;
  }
  .btn {
    padding-top: 10px;
    padding-bottom: 26px;
    height: 2rem;
    margin-top: 0.7rem;
  }
  .nav-container {
    display: flex;
    justify-content: space-between;
    background-color: var(--primary-9);
    box-shadow: var(--shadow-2);
    padding: 0rem 1rem;
    text-align: center;
  }
  .navbar {
    ul {
      display: flex;
      a {
        padding: 1rem;
        text-align: center;
      }
    }
  }
`
export default DesktopNavbar
