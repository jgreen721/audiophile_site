import React from 'react'
import "./FormDiv.css"

const FormDiv = ({label,placeholder}) => {
  return (
    <div style={{'--placeholder':'blue'}} className="form-div">
      <div>
        <label htmlFor={label}>
            <p className="label-p">{label}</p>
          </label>
      </div>
      <input type="text" className="form-control" autoComplete="off" name={label} placeholder={placeholder} autoComplete="off" />
      <div className="error-shell">
      <small className="form-error hide-error">Error</small>
      </div>
    </div>
  )
}

export default FormDiv