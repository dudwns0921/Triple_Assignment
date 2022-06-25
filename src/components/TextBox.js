import React from 'react'
import styled from 'styled-components'

function TextBox(props) {
  return (
    <Container>
      <strong>{props.amount}</strong>의 {props.category}
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

export default TextBox
