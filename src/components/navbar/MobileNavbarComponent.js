import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const MobileNavbarComponent = ({ path, title, values, setValues, icon }) => {
  return (
    <Wrapper>
      {icon}
      <NavLink onClick={() => setValues(!values)} to={path}>
        {title}
      </NavLink>
    </Wrapper>
  )
}
const Wrapper = styled.li`
  padding: 1rem;
  :hover {
    cursor: pointer;
  }
  transition: var(--transition);
  color: var(--grey-5);
  a {
    color: var(--grey-5);
  }
  :hover {
    padding-left: 1.4rem;
    background: var(--primary-5);
    color: var(--white);
    a {
      color: var(--white);
    }
  }
  display: flex;
  gap: 1rem;
  svg {
    margin-top: 6px;
  }
  .active {
    color: var(--primary-5);
  }
`
export default MobileNavbarComponent
