import React from 'react'
import styled from 'styled-components'

import triple2x from './public/images/triple2x.png'
import playStore2x from './public/images/play-store2x.png'
import badgeApple4x from './public/images/badge-apple4x.png'
import TextBox from './components/TextBox'

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
            <TextBox amount="350만 명" category="사용자" />
            <TextBox amount="21만 개" category="리뷰" />
            <TextBox amount="650만 개" category="저장" />
          </section>
          <section>
            <div>
              <img src={playStore2x} alt="googlePlay" />
              <span>
                2018 구글 플레이스토어
                <br />
                올해의 앱 최우수상 수상
              </span>
            </div>
            <div>
              <img src={badgeApple4x} alt="apple" />
              <span>
                2018 애플 앱스토어
                <br />
                오늘의 여행앱 선정
              </span>
            </div>
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
      div {
        display: flex;
        align-items: center;
        margin-right: 39px;
        img {
          width: 72px;
          padding-right: 10px;
        }
        span {
          font-weight: bold;
          font-size: 14px;
          line-height: 22px;
        }
      }
    }
  }
`

export default App
