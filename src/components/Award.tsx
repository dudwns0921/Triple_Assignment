import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
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
`

interface AwardProps {
  imgSrc: string
  statement: string[]
}

function Award(props: AwardProps) {
  return (
    <Container>
      <img src={props.imgSrc} alt="apple" />
      <span>
        {props.statement[0]}
        <br />
        {props.statement[1]}
      </span>
    </Container>
  )
}

export default Award
