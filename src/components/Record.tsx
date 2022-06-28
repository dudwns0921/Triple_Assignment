import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

interface RecordProps {
  amount: number
  unit: string
  category: string
}

function Record(props: RecordProps) {
  const [count, setCount]: [number, (newCount: number) => void] = useState(0)
  useEffect(() => {
    let delay = 1200 / props.amount
    if (count < props.amount - 4) {
      setTimeout(() => {
        setCount(count + 1)
      }, delay)
    } else if (props.amount - 4 <= count && count < props.amount) {
      delay = 800 / 4
      setTimeout(() => {
        setCount(count + 1)
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
