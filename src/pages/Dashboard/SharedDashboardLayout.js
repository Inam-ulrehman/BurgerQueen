import React from 'react'
import Footer from '../../components/Footer/Footer'
import DesktopNavbar from '../../components/navbar/DesktopNavbar'
import MobileNavbar from '../../components/navbar/MobileNavbar'
import { Link, Outlet } from 'react-router-dom'
import LogOut from '../../components/Dashboard.js/LogOut'

const SharedDashboardLayout = () => {
  return (
    <div>
      <MobileNavbar />
      <DesktopNavbar />
      <h1>Shared layout</h1>
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
      <Footer />
    </div>
  )
}

export default SharedDashboardLayout
