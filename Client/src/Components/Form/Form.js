import React from 'react'
import {Input} from '../../Styles/Styled'
export default function Form({name,placeHolder,type}) {
    return (
<Input type={type} placeholder={placeHolder} required name={name} spellCheck='false' className='Form' />
    )
}
