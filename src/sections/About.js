import React from "react"
import { Box, Flex } from "rebass"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import Section from "../components/Section"

const MbSection = styled(Box)`
  width: 100% !important;
`

const About = () => (
  <Section.Container id="about">
    <Section.Header name="About Me" icon="🙋‍♂️" label="person" />
    <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
      <MbSection width={[1, 1, 2 / 4]} color="decsGray">
        <Fade bottom>
          <Box fontSize={[1, 2, 3]} p="16px">
            {`Hello! I'm James with a passion for web developer and new technologies using the JavaScript ecosystem and React. 
            I have built web experiences for companies, using a broad range of technologies, 
            most notably React, CSS, TypeScript, JavaScript. I have also worked with Adobe Experience Manager, HubSpot, Magento, Wordpress`}
          </Box>
          <Box fontSize={[1, 2, 3]} p="16px">
            {`I started worked in programming journey in 2018 🚀. I love learning new technologies and 
            ready to move on to a new challenge. I put my efforts on learning the latest trends on Development, and strive to better myself as a developer.`}
          </Box>
          <Box fontSize={[1, 2, 3]} p="16px">
            {`I things love for React.js, Node.js, JavaScript, TypeScript, Express.js,
            Webpack, Git, styled-components,
            Gatsby.js, Netlify and a whole lot more.`}
          </Box>
        </Fade>
      </MbSection>
    </Flex>
  </Section.Container>
)

export default About
