import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Fade from "react-reveal/Fade"
import { CardContainer } from "../components/Card"
import Section from "../components/Section"
import ProjectLink from "../components/ProjectLink"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query GetAllProjects {
      allProjectsJson {
        edges {
          node {
            value {
              icon
              name
              description
              github
            }
          }
        }
      }
    }
  `)

  return (
    <Section.Container id="projects">
      <Section.Header
        name="Projects"
        icon="🗃️"
        label="project"
        Box="notebook"
      />
      <CardContainer>
        {data.allProjectsJson.edges.map(({ node }, i) => (
          <div style={{ width: "100%" }} key={node.value.name}>
            <Fade bottom delay={i * 200}>
              <ProjectLink {...node.value} />
            </Fade>
          </div>
        ))}
      </CardContainer>
    </Section.Container>
  )
}

export default Projects
