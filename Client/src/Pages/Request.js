import React, { Component } from 'react'
import Button from '../Components/Button/Button';
import '../Styles/Request.css'
export class Request extends Component {
    render() {
        return (
            <div className='Request'>
                <p>Request</p>
<form>
<textarea required placeholder='Name : ' autoFocus></textarea>
<Button value='Request' />
</form>
            </div>
        )
    }
}

export default Request
