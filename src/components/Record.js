import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

function Record(props) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let delay = 1200 / props.amount
    if (count < props.amount - 4) {
      setTimeout(() => {
        setCount((prev) => prev + 1)
      }, delay)
    } else if (props.amount - 4 <= count && count < props.amount) {
      delay = 800 / 4
      setTimeout(() => {
        setCount((prev) => prev + 1)
      }, delay)
    }
  }, [count, props.amount])
  return (
    <Container>
      <strong>
        {count}
        {props.unit}
      </strong>
      의 {props.category}
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 20px;
  font-size: 36px;
  color: rgb(58, 58, 58);
  strong {
    font-weight: bold;
  }
`

export default Record
