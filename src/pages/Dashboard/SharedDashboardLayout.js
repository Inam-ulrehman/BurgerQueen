import React from 'react'
import Footer from '../../components/Footer/Footer'
import DesktopNavbar from '../../components/navbar/DesktopNavbar'
import MobileNavbar from '../../components/navbar/MobileNavbar'
import { Outlet } from 'react-router-dom'

const SharedDashboardLayout = () => {
  return (
    <div>
      <MobileNavbar />
      <DesktopNavbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default SharedDashboardLayout
