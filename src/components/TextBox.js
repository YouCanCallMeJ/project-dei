import React from 'react'
import SelectDropDown from './SelectDropDown'

const TextBox = (props) => {
  const {label, onChange, id, ...inputProps} = props;
  return (
    <div className='aline'>
        {/* <SelectDropDown/> */}
        <label>{label}</label>
        <textarea
            // placeholder={props.placeholder}
            // onChange={e=>props.setUserInput(e.target.value)}
            // disabled={props.able == 'able'}
          {...inputProps} onChange={onChange}
        />

    </div>
  )
}

export default TextBox