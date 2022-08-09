import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaHamburger } from 'react-icons/fa'

const Logo = () => {
  return (
    <Wrapper className='logo'>
      <Link to='/'>
        <h3 className='logo-heading'>
          burger
          <span className='logo-span'>
            Queen <FaHamburger />
          </span>
        </h3>
        <div className='title-underline'></div>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .logo-heading {
    margin: 0;
    font-size: 2rem;
    font-weight: 700;
    color: var(--grey-5);
    :hover {
      cursor: pointer;
    }

    .logo-span {
      color: var(--primary-6);
      margin: 0 -2px;
      svg {
        font-size: 1.5rem;
      }
      :hover {
        color: var(--primary-5);
      }
    }
  }
  .title-underline {
    margin-top: 1px;
  }
`
export default Logo
