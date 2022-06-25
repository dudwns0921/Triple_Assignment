import React from 'react'
import styled from 'styled-components'

import triple2x from './public/images/triple2x.png'

function App() {
  return (
    <Container>
      <RightSec>
        <div>
          <img src={triple2x} alt="main" />
          <span>2019년 2월 기준</span>
        </div>
      </RightSec>
      <LeftSec>Left</LeftSec>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-width: 1200px;
  height: 50vh;
`
const RightSec = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  div {
    position: relative;
    width: 50%;
    display: flex;
    justify-content: center;
    img {
      width: 100%;
      height: auto;
    }
    span {
      position: absolute;
      bottom: 0;
    }
  }
`
const LeftSec = styled.section``

export default App
