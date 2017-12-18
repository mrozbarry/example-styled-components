import React from "react"

import "./Input.sass"
import regexpToPatternAttr from "../../common/regexpToPatternAttr"

export default function SassInput ({ pattern, name, id, value, onChange, required, errors, children }) {
  return (
    <div className="input-container">
      <input
        name={name}
        id={id}
        value={value}
        pattern={regexpToPatternAttr(pattern)}
        onChange={onChange}
        required={required}
      />
      <label htmlFor={id}>{children}</label>
      {renderErrors(errors)}
    </div>
  )
}


export const renderErrors = (errors) => {
  if (!errors || errors.length === 0) return null

  return (
    <ul>
      {errors.map((e, idx) => <li key={btoa([idx, e].join(" "))}>{e}</li>)}
    </ul>
  )
}
