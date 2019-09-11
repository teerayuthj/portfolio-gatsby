import React from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faGhost, fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

import Layout from "../components/layout"
import Header from "../components/header"
import Footer from "../components/Footer"
import About from "../sections/About"
import Projects from "../sections/Projects"
import Headingpage from "../sections/Heading"

library.add(faGhost, fab, fas)

const IndexPage = () => (
  <Layout>
    <Header />
    <Headingpage />
    <About />
    <Projects />
    <Footer />
  </Layout>
)

export default IndexPage
