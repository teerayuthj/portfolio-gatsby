import React, { Fragment } from "react"
import { Heading, Flex, Box, Text } from "rebass"
import TextLoop from "react-text-loop"
import Section from "../components/Section"
import SocialLink from "../components/Social"

const links = [
  {
    fontAwesomeIcon: ["fab", "github"],
    name: "GitHub",
    url: "https://github.com/McTunT",
  },

  {
    fontAwesomeIcon: ["fab", "medium"],
    name: "Medium",
    url: "https://medium.com/@jamesteerayuth",
  },
]

const HeadingPage = () => (
  <Section.Container id="home">
    <Fragment>
      <Heading
        textAlign="center"
        as="h1"
        color="primary"
        fontSize={[5, 6, 7]}
        mb={[3, 4, 5]}
      >
        {`Hello, I'm Teerayuth Thanakornyingyong!`}
      </Heading>
      <Heading
        textAlign="center"
        as="h3"
        color="primary"
        fontSize={[4, 5, 6]}
        mb={[1, 2, 3]}
      >
        {`Fontend Developer`}
      </Heading>
      <Heading
        as="h2"
        color="primary"
        fontSize={[4, 5, 6]}
        mb={[3, 5]}
        textAlign="center"
      >
        <TextLoop>
          {["React", "JavaScript", " CSS", "GraphQL"].map(text => (
            <Text width={[300, 500]} key={text}>
              {text}
            </Text>
          ))}
        </TextLoop>
      </Heading>

      <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
        {links.map(link => (
          <Box mx={3} fontSize={[5, 6, 6]} key={link.name}>
            <SocialLink {...link} />
          </Box>
        ))}
      </Flex>
    </Fragment>
  </Section.Container>
)

export default HeadingPage
