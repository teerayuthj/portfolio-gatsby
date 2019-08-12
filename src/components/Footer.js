import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { Flex, Box, Image } from "rebass"
import { Tooltip } from "react-tippy"

import NetlifyLogo from "../logo/netlify_logomark.svg"
import GatsbyLogo from "../logo/Gatsby_Monogram.svg"

const FooterContainer = styled.footer`
  padding: 1em;
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ImageLogo = styled(Image)`
  width: 40px;
  height: 40px;
`

const Logo = ({ url, logo, alt = "" }) => (
  <Box mr={3}>
    <a href={url} rel="noopener noreferrer" target="_blank">
      <ImageLogo src={logo} alt={alt} />
    </a>
  </Box>
)

const Footer = () => (
  <FooterContainer>
    <Fade bottom>
      <Flex justifyContent="center" alignItems="center">
        <Tooltip title="Gatsby" trigger="mouseenter" theme="light">
          <Logo
            url="https://www.gatsbyjs.org"
            logo={GatsbyLogo}
            alt="Gatsby Logo"
          />
        </Tooltip>
        <Tooltip title="Netlify" trigger="mouseenter" theme="light">
          <Logo
            url="https://www.netlify.com"
            logo={NetlifyLogo}
            alt="Netlify Logo"
          />
        </Tooltip>
      </Flex>
    </Fade>
  </FooterContainer>
)

export default Footer
