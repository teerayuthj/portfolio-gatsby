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
            most notably React, CSS, TypeScript, JavaScript. I have also worked with Adobe Experience Manager, HubSpot, Magento, Wordpress`}
          </Box>
          <Box fontSize={[1, 2, 3]} p="15px">
            {`I started worked in programming journey in 2018 🚀. I love learning new technologies and 
            ready to move on to a new challenge. I put my efforts on learning the latest trends on Development, and strive to better myself as a developer.`}
          </Box>
          <Box fontSize={[1, 2, 3]} p="15px">
            {`I things love for React.js, Node.js, JavaScript, TypeScript, Express.js,
            Webpack, Git, styled-components,
            Gatsby.js, Netlify and a whole lot more.`}
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
