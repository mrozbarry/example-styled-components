import React from "react"
import { render } from "react-dom"

import "./index.sass"
import App from "../common/App"
import Input from "./components/Input"

const rootEl = document.querySelector(".component-host#react-sass")

render(<div className="react-sass"><App idPrefix="sass" inputComponent={Input} /></div>, rootEl)
