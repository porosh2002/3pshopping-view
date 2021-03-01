import React, { Component } from 'react'
import '../Styles/Browse.css'
export default class BrowseMovie extends Component {
    render() {
        return (
            <div className='Browse'>
            <p className='BrowseTitle'>Search : </p>
            <input placeholder='name' spellCheck='false' autoFocus className='BrowseSearchBar' type='text'></input>
<div className='SelectsBrowse'>
<div>
<p className='BrowseTitle'>Search : </p>
<select>
                <option>one</option>
                <option>one</option>
                <option>one</option>
                <option>one</option>
            </select>
</div>
<div>
<p className='BrowseTitle'>Search : </p>
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
