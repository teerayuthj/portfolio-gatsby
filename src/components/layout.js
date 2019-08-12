import React, { Fragment } from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { ScrollingProvider } from "react-scroll-section"
import config from "react-reveal/globals"

import colors from "./Colors"
import Helmets from "./Helmets"
import "react-tippy/dist/tippy.css"

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before { 
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
  }

body {
  -webkit-boxs-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  overflow-x: hidden;
  font-family: Kanit ,sans-serif;
  background: #fafafa;
}`

config({ ssrFadeout: true })

const Layout = ({ children }) => (
  <Fragment>
    <GlobalStyle />
    <ThemeProvider theme={{ colors }}>
      <ScrollingProvider>
        <Helmets />
        {children}
      </ScrollingProvider>
    </ThemeProvider>
  </Fragment>
)

export default Layout
