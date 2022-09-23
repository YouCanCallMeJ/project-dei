import React from 'react'

const TextBoxOutput = (props) => {
    return (
        <div>
        <textarea className='output'
            placeholder={props.placeholder}
            disabled={props.disabled}
            value='hello'
            
        >
        </textarea>

    </div>

  )
}

export default TextBoxOutput