import React from "react"
import { Box, Image, Flex } from "rebass"
import Fade from "react-reveal/Fade"
import styled from "styled-components"
import Section from "../components/Section"
import James from "../images/james.jpg"

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  transition: all 0.25 ease-out;
`

const About = () => (
  <Section.Container id="about">
    <Section.Header name="About Me" icon="🙋‍♂️" label="person" />
    <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
      <Box width={[1, 1, 2 / 4]} color="decsGray">
        <Fade bottom>
          <Box fontSize={[1, 2, 3]} p="15px">
            {`Hello! I'm James with a passion for web developer and new technologies using the JavaScript ecosystem and React. 
            I have built web experiences for companies, using a broad range of technologies, 
            most notably React, CSS, Webpack, JavaScript, Adobe AEM, HubSpot, Magento`}
          </Box>
          <Box fontSize={[1, 2, 3]} p="15px">
            {`I started worked in programming journey in 2018 🚀. I love learning new technologies and 
            ready to move on to a new challenge.`}
          </Box>
          <Box fontSize={[1, 2, 3]} p="15px">
            I things love and thank you for React.js, Node.js, JavaScript,
            Express.js, Webpack, GraphQL, Apollo GraphQL, Git,
            styled-components, Rebass, Gatsby.js, Create React App, Netlify and
            a whole lot more.
          </Box>
        </Fade>
      </Box>

      <Box width={[1, 1, 2 / 6]} style={{ maxWidth: "300px", margin: "auto" }}>
        <Fade right>
          <ProfilePicture
            src={James}
            alt="teerayuth"
            mt={[4, 4, 0]}
            ml={[0, 0, 1]}
          />
        </Fade>
      </Box>
    </Flex>
  </Section.Container>
)

export default About
