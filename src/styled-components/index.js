import React from "react"
import { render } from "react-dom"
import { ThemeProvider } from "styled-components"

import App from "../common/App"
import Input from "./components/Input"

const rootEl = document.querySelector(".component-host#styled-components")

const theme = {
  inputPadding: "8px",
  defaultFontSize: "14px",
  defaultFontFace: "sans-serif",
  borderRadius: "4px",
  primaryColor: "#CA1551",
  inputFontSize: "20px"

}

render(
  <ThemeProvider theme={theme}>
    <App idPrefix="styled" inputComponent={Input} />
  </ThemeProvider>,
  rootEl
)
