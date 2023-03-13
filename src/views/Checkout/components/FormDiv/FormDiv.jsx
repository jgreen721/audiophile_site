import React, {useRef} from 'react'
import { useAppContext } from '../../../../context/AppStore'
import "./FormDiv.css"

const FormDiv = ({label,placeholder,dictionary}) => {
  const formRef = useRef();

  // console.log(label)

  const removeErrors=()=>{
      formRef.current.querySelector(".form-control").classList.remove("error-border")
      formRef.current.querySelector(".form-error").classList.add("hide-error")
  }
  return (
    <div ref={formRef} style={{'--placeholder':'blue'}} className="form-div">
      <div>
        <label htmlFor={label}>
            <p className="label-p">{label}</p>
          </label>
      </div>
      <input onKeyDown={removeErrors} type="text" className="form-control" dictionary={dictionary} autoComplete="off" name={label} placeholder={placeholder} />
      <div className="error-shell">
      <small className="form-error hide-error">Error</small>
      </div>
    </div>
  )
}

export default FormDiv