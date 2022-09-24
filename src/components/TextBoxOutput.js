import React from 'react'

const TextBoxOutput = (props) => {
    // const {label, onChange, id, ...outputProps} = props;
    return (
        <div>
        {/* <label>{label}</label> */}
        <textarea className='output'
            placeholder={props.placeholder}
            disabled={props.disabled}
            value={props.textValues}
            // onChange={props.onChange}
        // {...outputProps} onChange={onChange}    
        >
        </textarea>

    </div>

  )
}

export default TextBoxOutput