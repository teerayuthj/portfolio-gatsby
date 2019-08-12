import React from "react"
import styled from "styled-components"
import { Section } from "react-scroll-section"
import { Heading } from "rebass"
import Slide from "react-reveal/Slide"
import Links from "./Links"

const SectionContainer = styled.div`
  min-height: 100vh;
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  font-size: 4em;
  scroll-behavior: smooth;
  position: relative;
`

const Container = ({ id, children }) => (
  <Section id={id}>
    <SectionContainer>{children}</SectionContainer>
  </Section>
)

const Header = ({ name, icon = "", label = "" }) => (
  <Slide left>
    <Heading color="primary" mb={4} p="15px">
      <Links selected>
        {name}
        {icon && (
          <span
            role="img"
            aria-label={label}
            style={{ marginLeft: "10px" }}
            alt="icon"
          >
            {icon}
          </span>
        )}
      </Links>
    </Heading>
  </Slide>
)

export default { Container, Header }
