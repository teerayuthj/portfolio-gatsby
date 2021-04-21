import React, { Fragment } from "react"
import Headroom from "react-headroom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Flex } from "rebass"
import styled from "styled-components"
import { SectionLinks } from "react-scroll-section"
import Fade from "react-reveal/Fade"
import RouteLink from "./RouteLink"

const capitalize = cap => cap && cap[0].toUpperCase() + cap.slice(1)

const HeaderContainer = styled(Headroom)`
  .headroom--pinned {
    background: ${props => props.theme.colors.White};
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
    pointer-events: auto;
  }
  position: absolute;
  width: 100%;
`

const formatLinks = allLinks =>
  Object.entries(allLinks).reduce(
    (acc, [key, value]) => {
      const isHome = key === "home"
      return isHome
        ? {
            ...acc,
            home: value,
          }
        : {
            ...acc,
            links: [...acc.links, { name: capitalize(key), value }],
          }
    },
    { links: [], home: null }
  )

const Header = () => (
  <HeaderContainer>
    <Fade bottom>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
        p={3}
      >
        <SectionLinks>
          {({ allLinks }) => {
            const { home, links } = formatLinks(allLinks)

            const homeLink = home && (
              <FontAwesomeIcon
                icon={["fas", "fire"]}
                onClick={home.onClick}
                size="2x"
                style={{
                  color: "#6441a4",
                  cursor: "pointer",
                }}
              />
            )

            const navLinks = links.map(({ name, value }) => (
              <RouteLink
                key={name}
                onClick={value.onClick}
                selected={value.selected}
              >
                {name}
              </RouteLink>
            ))

            return (
              <Fragment>
                {homeLink}
                <Flex mr={[0, 3, 5]}>{navLinks}</Flex>
              </Fragment>
            )
          }}
        </SectionLinks>
      </Flex>
    </Fade>
  </HeaderContainer>
)

export default Header
