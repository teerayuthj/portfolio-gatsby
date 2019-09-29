import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Text, Flex, Image, Link, Box } from "rebass"
import styled from "styled-components"

import { Card } from "./Card"

const HEIGHT = "200px"

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  font-weight: 600 !important;
`
const Title = styled(Text)`
  font-size: 18px;
  font-weight: 600 !important;
  display: table;
  color: ${props => props.theme.colors.darkGrey};
`

const LinkGihub = styled(Link)`
  font-size: 15px;
  font-weight: 600 !important;
  text-decoration: none;
  position: relative;
  margin-bottom: 0;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    right: 0;
    width: 0;
    bottom: -2px;
    background: ${props => props.theme.colors.primaryLight};
    height: 2px;
    transition-property: width;
    transition-timing-function: ease-out;
  }
  &:hover {
    color: ${props => props.theme.colors.primaryLight};
  }
  &:hover:after {
    left: 0;
    right: auto;
    width: 102px;
    margin: auto;
  }
  @media only screen and (max-width: 600px) {
    margin-top: 15px;
  }
`

const LinkProject = ({ name, icon, description, github }) => {
  return (
    <Box m={[0, 1, 2]}>
      <Card
        p={0}
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex style={{ height: HEIGHT }}>
          <TextContainer>
            <Image src={icon} width={[1 / 6]} />
            <span>
              <Title pt={1}>{name}</Title>
            </span>
            <Box fontSize={[1, 1, 2]} color="WhiteGray">
              {description}
            </Box>
            <LinkGihub
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
            >
              Source Code
              <FontAwesomeIcon
                style={{
                  padding: "11px 0 0 0",
                  fontWeight: "normal",
                  fontSize: "25px",
                }}
                icon={["fas", "angle-double-right"]}
              />
            </LinkGihub>
          </TextContainer>
        </Flex>
      </Card>
    </Box>
  )
}

export default LinkProject
