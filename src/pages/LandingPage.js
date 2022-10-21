import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import LandingPageOne from '../components/LandingPage/LandingPageOne'
import LandingPageThree from '../components/LandingPage/LandingPageThree'
import LandingPageTwo from '../components/LandingPage/LandingPageTwo'

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name='description' title='Welcome to burger queen home.' />
        <link rel='canonical' href='/' />
      </Helmet>
      <LandingPageOne />
      <LandingPageTwo />
      <LandingPageThree />
    </div>
  )
}

export default LandingPage
