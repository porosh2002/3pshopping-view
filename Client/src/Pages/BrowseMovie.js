import React, { Component } from 'react'
import '../Styles/Browse.css'
export default class BrowseMovie extends Component {
    render() {
        return (
            <div className='Browse'>
            <p className='BrowseTitle'>Search : </p>
            <input placeholder='name' spellCheck='false' autoFocus className='BrowseSearchBar' type='text'></input>
<div className='SelectsBrowse'>
<div className='SelectWraper'>
<p className='BrowseTitle'>Genre : </p>
<select>
                <option>one</option>
                <option>one</option>
                <option>one</option>
                <option>one</option>
            </select>
</div>
<div className='SelectWraper'>
<p className='BrowseTitle'>Language : </p>
            <select>
                <option>one</option>
                <option>one</option>
                <option>one</option>
                <option>one</option>
            </select>
</div>
<div className='SelectWraper'>
<p className='BrowseTitle'>Rating : </p>
            <select>
                <option>one</option>
                <option>one</option>
                <option>one</option>
                <option>one</option>
            </select>
</div>
<div className='SelectWraper'>
<p className='BrowseTitle'>Year : </p>
            <select>
                <option>one</option>
                <option>one</option>
                <option>one</option>
                <option>one</option>
            </select>
</div>
</div>
            </div>
        )
    }
}
