import React from 'react'
import {Input} from '../../Styles/Styled'
export default function Form({name,placeHolder,type,minlen,maxlen}) {
    return (
<Input minLength={minlen} maxLength={maxlen} type={type} placeholder={placeHolder} required name={name} spellCheck='false' className='Form' />
    )
}
