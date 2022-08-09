import React from 'react'
import { navbarData } from '../../utils/data'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo'
import github from '../../images/github.svg'
import facebook from '../../images/facebook.svg'
import instagram from '../../images/instagram.svg'
import linkedin from '../../images/linkedin.svg'

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
      <div className='social-icons'>
        <h4 className='title'>SOCIAL MEDIA</h4>
        <ul>
          <li>
            <a href='https://facebook.com' target='_blank' rel='noreferrer'>
              <img className='icon' src={facebook} alt='' />
            </a>
          </li>
          <li>
            <a href='https://instagram.com' target='_blank' rel='noreferrer'>
              <img className='icon' src={instagram} alt='' />
            </a>
          </li>
          <li>
            <a href='https://linkedin.com' target='_blank' rel='noreferrer'>
              <img className='icon' src={linkedin} alt='' />
            </a>
          </li>
          <li>
            <a
              href='https://github.com/Inam-ulrehman'
              target='_blank'
              rel='noreferrer'
            >
              <img className='icon' src={github} alt='' />
            </a>
          </li>
        </ul>
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
  .bar {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    max-width: 400px;
    margin: 0 auto;
    a {
      color: var(--black);
      :hover {
        color: var(--primary-5);
      }
    }
  }
  .icon {
    width: 30px;
  }
  .social-icons {
    width: 210px;
    margin: 0 auto;

    ul {
      a {
      }
      display: flex;
      gap: 1rem;
      justify-content: space-between;
    }
  }
  .address {
    text-align: center;
  }
  .address {
    max-width: 500px;
    margin: 0 auto;
    span {
      color: var(--grey-5);
      :hover {
        color: var(--primary-5);
        cursor: pointer;
      }
    }
  }
  .address-p {
    p {
      margin: 0 auto;
      max-width: 200px;
      :hover {
        color: var(--primary-5);
        cursor: pointer;
      }
    }
  }
  p {
    font-size: var(--small-text);
  }
  a {
    font-size: var(--small-text);
  }
  @media (min-width: 920px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

export default FooterPageOne
