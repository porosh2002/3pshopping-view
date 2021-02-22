import React from 'react'
import {Input} from '../../Styles/Styled'
export default function Form({name,placeHolder}) {
    return (
<Input placeholder={placeHolder} required name={name} spellCheck='false' className='Form' />
    )
}
