import React from 'react'
import {Input} from '../../Styles/Styled'
export default function Form({...Others}) {
    return (
<Input required  spellCheck='false' {...Others} className='Form' />
    )
}
