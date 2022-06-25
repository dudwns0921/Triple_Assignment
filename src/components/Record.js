import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

function Record(props) {
  const [count, setCount] = useState(0)
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
