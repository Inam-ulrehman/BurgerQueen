import React from 'react'
import Footer from '../../components/Footer/Footer'
import MobileNavbar from '../../components/navbar/MobileNavbar'
import { Link, Outlet } from 'react-router-dom'
import LogOut from '../../components/Dashboard.js/LogOut'
import styled from 'styled-components'

const SharedDashboardLayout = () => {
  return (
    <Wrapper>
      <MobileNavbar />
      <div className='shared-dashboard'>
        <div>
          <Link to='/dashboard/profile' className='btn'>
            Profile
          </Link>
          <Link to='/dashboard/payment' className='btn'>
            payment
          </Link>
          <Link to='/dashboard' className='btn'>
            Dashboard
          </Link>

          <Link to='/dashboard/orders' className='btn'>
            Orders
          </Link>
        </div>
        <LogOut />
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
`

export default SharedDashboardLayout
