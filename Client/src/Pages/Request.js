import React, { Component } from 'react'
import Button from '../Components/Button/Button';
import Social from '../Components/Social/Social';
import '../Styles/Request.css'
export class Request extends Component {
    render() {
        return (
            <div className='Request'>
                <p>Request</p>
<form>
<textarea required placeholder='movie name / tv series name / live tv channel name : ' autoFocus></textarea>
<Button value='Request' />
</form>
<p>Other's Ways to Request</p>
<span>jamilkashem@zoho.com</span>
<span>asif1999@gmail.com</span>
<Social />
</div>
        )
    }
}

export default Request
