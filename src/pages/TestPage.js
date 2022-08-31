import React from 'react'
import styled from 'styled-components'
import AlertDialog from '../components/Cards/AlertDialog'

const TestPage = () => {
  const action = () => {
    console.log('hello')
  }
  return (
    <Wrapper>
      <AlertDialog
        content={'Do you really want to empty your cart ?'}
        title={'Alert'}
        buttonText={'Remove'}
        action={action}
      />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  height: 100vh;
  margin-top: 4rem;
`
export default TestPage
