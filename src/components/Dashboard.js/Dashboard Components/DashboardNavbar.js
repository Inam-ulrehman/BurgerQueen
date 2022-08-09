import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { dashboard } from '../../../utils/data'

const DashboardNavbar = () => {
  return (
    <Wrapper>
      <div className='main-component'>
        {dashboard.map((item) => {
          return (
            <ul className='component' key={item.id} {...item}>
              <li className='li'>
                <NavLink className='btn' to={item.path}>
                  {item.title}
                </NavLink>
              </li>
            </ul>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .main-component {
    display: flex;
    position: fixed;
    top: 3rem;
  }
`
export default DashboardNavbar
