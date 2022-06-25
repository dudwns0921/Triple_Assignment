import React from 'react'
import styled from 'styled-components'

import triple2x from './public/images/triple2x.png'
import playStore2x from './public/images/play-store2x.png'
import badgeApple4x from './public/images/badge-apple4x.png'
import Record from './components/Record'
import { AWARDSTATEMENT1, AWARDSTATEMENT2 } from './constants/statements'
import Award from './components/Award'

function App() {
  return (
    <Container>
      <RightSec>
        <main>
          <img src={triple2x} alt="triple" />
          <span>2019년 2월 기준</span>
        </main>
      </RightSec>
      <LeftSec>
        <main>
          <section>
            <Record amount="350" unit="만 명" category="사용자" />
            <Record amount="21" unit="만 개" category="리뷰" />
            <Record amount="650" unit="만 개" category="저장" />
          </section>
          <section>
            <Award imgSrc={playStore2x} statement={AWARDSTATEMENT1} />
            <Award imgSrc={badgeApple4x} statement={AWARDSTATEMENT2} />
          </section>
        </main>
      </LeftSec>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-width: 1200px;
  height: 552px;
  padding-top: 150px;
  font-family: var(--app-font-style);
  color: var(--app-font-color);
`
const RightSec = styled.section`
  animation-duration: 700ms;
  animation-name: fadeInUp;
  display: flex;
  justify-content: center;
  main {
    position: relative;
    width: 400px;
    height: 338px;
    display: flex;
    justify-content: center;
    img {
      width: 100%;
      height: 100%;
    }
    span {
      position: absolute;
      font-size: 15px;
      bottom: 43px;
    }
  }
`
const LeftSec = styled.section`
  display: flex;
  flex-direction: column;
  main {
    display: grid;
    section {
      animation-name: fadeInUp;
      animation-duration: 700ms;
      animation-fill-mode: backwards;
    }
    section:nth-child(1) {
      animation-delay: 100ms;
    }
    section:nth-child(2) {
      animation-delay: 200ms;
      display: flex;
      margin-top: 30px;
    }
  }
`

export default App
