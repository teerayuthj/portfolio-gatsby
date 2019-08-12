import React from "react"
import { Box } from "rebass"
import Links from "./Links"

const RouteLinks = ({ onClick, selected, children }) => (
  <Box ml={[2, 3]} color="primary" fontSize={[2, 3]}>
    <Links onClick={onClick} selected={selected}>
      {children}
    </Links>
  </Box>
)

export default RouteLinks
