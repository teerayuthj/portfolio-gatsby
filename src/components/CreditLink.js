import React from "react"
import { Link } from "rebass"
import styled from "styled-components"

const NamesLink = styled(Link)`
  color: ${props => props.theme.colors.bule};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`

const CreditLink = ({ nameLink, name, children }) => {
  return (
    <NamesLink
      href={nameLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
    >
      {children}
    </NamesLink>
  )
}

export default CreditLink
