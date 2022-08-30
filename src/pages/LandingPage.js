import React, { useEffect } from 'react'
import LandingPageOne from '../components/LandingPage/LandingPageOne'
import LandingPageThree from '../components/LandingPage/LandingPageThree'
import LandingPageTwo from '../components/LandingPage/LandingPageTwo'

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])
  return (
    <div>
      <LandingPageOne />
      <LandingPageTwo />
      <LandingPageThree />
    </div>
  )
}

export default LandingPage
