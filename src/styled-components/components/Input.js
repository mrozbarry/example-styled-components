import React, { Component } from "react"
import styled from "styled-components"
import regexpToPatternAttr from "../../common/regexpToPatternAttr"


export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${props => props.theme.defaultFontFace};
  font-size: ${props => props.theme.defaultFontSize};
`


export const Input = styled.input`
  padding: ${props => props.theme.inputPadding};
  font-family: ${props => props.theme.defaultFontFace};
  font-size: ${props => props.theme.inputFontSize};
  border-radius: ${props => props.theme.borderRadius};
  order: 1;
`


export const Label = styled.label`
  order: 0;

  input:invalid + & {
    color: ${props => props.theme.primaryColor};
  }
`


export const Ul = styled.ul`
  order: 2;
`


export default function StyledInput({ pattern, name, id, value, onChange, required, errors, children }) {
  return (
    <InputWrapper>
      <Input
        name={name}
        id={id}
        value={value}
        pattern={regexpToPatternAttr(pattern)}
        onChange={onChange}
        required={required}
      />
      <Label htmlFor={id} hasError={errors.length > 0}>{children}</Label>
      {renderErrors(errors)}
    </InputWrapper>
  )
}


export const renderErrors = (errors) => {
  if (!errors || errors.length === 0) return null

  return (
    <Ul>
      {errors.map((e, idx) => <li key={btoa([idx, e].join(" "))}>{e}</li>)}
    </Ul>
  )
}
