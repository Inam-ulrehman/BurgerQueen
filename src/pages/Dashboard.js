import { React, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import DashboardNavbar from '../components/Dashboard.js/Dashboard Components/DashboardNavbar'
import Footer from '../components/Footer/Footer'
import DesktopNavbar from '../components/navbar/DesktopNavbar'
import MobileNavbar from '../components/navbar/MobileNavbar'

const Dashboard = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])
  return (
    <Wrapper>
      <main>
        <DesktopNavbar />
        <MobileNavbar />
        <DashboardNavbar />
        <section className='section'>
          <Outlet />
          <Footer />
        </section>
      </main>
    </Wrapper>
  )
}
const Wrapper = styled.div``
export default Dashboard
