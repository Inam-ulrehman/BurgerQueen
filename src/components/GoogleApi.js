import { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import styled from 'styled-components'

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  })

  if (!isLoaded) return <div>Loading...</div>
  return <Map />
}

function Map() {
  const center = useMemo(() => ({ lat: 43.42446, lng: -80.43886 }), [])

  return (
    <Wrapper>
      <div className='map-box'>
        <h5>Cambridge office</h5>
        <p>22 Pinebush Rd, Cambridge, ON N1R 8K5</p>
        <GoogleMap
          zoom={14}
          center={center}
          mapContainerClassName='map-container'
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
      <div className='map-box'>
        <h5>kitchener office</h5>
        <p>2960 Kingsway Dr, Kitchener, ON N2C 1X1</p>
        <GoogleMap
          zoom={14}
          center={center}
          mapContainerClassName='map-container'
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .map-container {
    width: 250px;
    height: 250px;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  text-align: center;

  @media (min-width: 768px) {
    display: flex;
    gap: 2rem;
    div {
      margin: 0 auto;
    }
  }
`
