import React, { useState } from "react"
import styled from "styled-components"
import { Flex, Box } from "rebass"
import NumberFormat from "react-number-format"

const OnInput = styled.input`
  width: 150px;
  margin: 0;
  background: none;
  top: 0;
  font-size: 50px;
  margin: 0;
  border: none;
`

const Input = () => {
  const [value, setValue] = useState("20000")

  const handleChange = event => setValue(event.target.value)

  const bid = value - 1000
  const jiwary = value * 0.95

  const jiwarys = bids => {
    let t
    t = bids * 0.95
    return t.toFixed()
  }

  return (
    <div style={{ fontSize: "50px" }}>
      <Box>
        <OnInput
          type="text"
          value={value.toLocaleString()}
          onChange={handleChange}
        />
      </Box>

      <div>
        <NumberFormat value={bid} displayType="text" thousandSeparator />
      </div>
      <div>
        <NumberFormat
          value={jiwarys(value)}
          displayType="text"
          thousandSeparator
        />
      </div>
    </div>
  )
}

export default Input
