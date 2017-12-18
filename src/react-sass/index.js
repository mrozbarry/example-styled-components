import React from "react"
import { render } from "react-dom"
import "./index.sass"
import App from "../common/App"
import Input from "./components/Input"

render(
  <div className="react-sass">
    <App idPrefix="sass" inputComponent={Input} />
  </div>,
  document.querySelector(".component-host#react-sass")
)
