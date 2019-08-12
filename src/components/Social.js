import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "rebass"
import { Tooltip } from "react-tippy"
import styled from "styled-components"

const IconLink = styled(Link)`
  transition: color 0.5s;
  color: ${props => props.theme.colors.primary};

  &:hover {
    color: ${props => props.theme.colors.primaryLight};
  }
`

const SocialLink = ({ fontAwesomeIcon, name, url }) => (
  <Tooltip title={name} position="bottom" trigger="mouseenter" theme="light">
    <IconLink
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
    >
      <FontAwesomeIcon icon={fontAwesomeIcon} />
    </IconLink>
  </Tooltip>
)

export default SocialLink
