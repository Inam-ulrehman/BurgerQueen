import React from 'react'
import Footer from '../../components/Footer/Footer'
import MobileNavbar from '../../components/navbar/MobileNavbar'
import { Link, Outlet } from 'react-router-dom'
import LogOut from './LogOut'
import styled from 'styled-components'
import { Button } from '@mui/material'

const SharedDashboardLayout = () => {
  return (
    <Wrapper>
      <MobileNavbar />
      <div className='shared-dashboard'>
        <div className='dashboard-buttons'>
          <Link to='/dashboard/profile'>
            <Button variant='outlined'>Profile</Button>
          </Link>
          <Link to='/dashboard/payment'>
            <Button variant='outlined'>Pay Online</Button>
          </Link>
          <Link to='/dashboard'>
            <Button variant='outlined'>Dashboard</Button>
          </Link>

          <Link to='/dashboard/orders'>
            <Button variant='outlined'>Recent Orders</Button>
          </Link>
          <LogOut />
        </div>

        <Outlet />
      </div>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .shared-dashboard {
    margin-top: 4.3rem;
    min-height: calc(100vh - 4.3rem);
  }
  .dashboard-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`

export default SharedDashboardLayout
