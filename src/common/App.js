import React, { Component } from "react"

const validityMethodFor = (form) => {
  if (typeof form.reportValidity === "function") return () => form.reportValidity()
  else if (typeof form.checkValidity === "function") return () => form.checkValidity()
  else return () => true
}

const reportErrorsForInput = (input) => {
  if (!input.validity || input.validity.valid === true) return []

  return [input.validationMessage]
    .concat(input.validity.patternMismatch ? `Should match regexp: ${input.pattern}` : [])
}

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      regular: { value: "", errors: [] },
      patterned: { value: "", errors: [] },
    }

    this.onSubmit = this.onSubmit.bind(this)
  }


  componentDidMount () {
    this.formChecker = validityMethodFor(this._formRef)
  }


  onSubmit (e) {
    e.preventDefault()

    this.setState({
      regular: {
        value: this.state.regular.value,
        errors: [],
      },
      patterned: {
        value: this.state.patterned.value,
        errors: [],
      }
    })
  }


  onChange (stateKey, e) {
    this.setState({
      [stateKey]: {
        value: e.target.value,
        errors: reportErrorsForInput(e.target)
      }
    })
  }


  render () {
    const Input = this.props.inputComponent
    const idGenerator = (id) => `${this.props.idPrefix}-${id}`

    return (
      <form ref={(el) => this._formRef = el} onSubmit={this.onSubmit}>
        <Input
          name="test"
          id={idGenerator("regular")}
          value={this.state.regular.value}
          onChange={this.onChange.bind(this, "regular")}
          errors={this.state.regular.errors}
        >
          Regular Input
        </Input>

        <Input
          name="test"
          id={idGenerator("patterned")}
          value={this.state.patterned.value}
          pattern={/^.+ABC$/}
          onChange={this.onChange.bind(this, "patterned")}
          errors={this.state.patterned.errors}
          required
        >
          Pattern-Matching Input (Must end in ABC)
        </Input>

        <input type="submit" value="Test Submit" />
      </form>
    )
  }
}
