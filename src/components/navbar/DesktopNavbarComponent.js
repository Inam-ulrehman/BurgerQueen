import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const SharedNavbar = ({ path, title, icon }) => {
  return (
    <Wrapper>
      <NavLink to={path}>
        {title} {icon}
      </NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.li`
  a {
    color: var(--grey-5);
    transition: var(--transition);
    padding: 5px !important;
    padding-left: 0px !important;

    :hover {
      background-color: var(--primary-6);
      color: var(--white);
      border-radius: var(--radius);
      transition: var(--transition);
    }
  }
  @media (min-width: 780px) {
    a {
      padding: 12px !important;
    }
  }
  .active {
    background-color: var(--primary-5);
    color: var(--white);
    border-radius: var(--radius);
    transition: var(--transition);
  }
`
export default SharedNavbar
