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
                <option>--All--</option>
                <option>Action</option>
                <option>Adventure</option>
                <option>Animation</option>
                <option>Biography</option>
                <option>Thriller</option>
                <option>Crime</option>
                <option>Superhero</option>
                <option>Comedy</option>
                <option>Documentary</option>
                <option>Drama</option>
                <option>Family</option>
                <option>Fantasy</option>
                <option>Romance</option>
                <option>Horror</option>
                <option>Mystery</option>
                <option>Sci-fi</option>
                {/* <option>Crime</option>
                <option>Crime</option>
                <option>Crime</option>
                <option>Crime</option>
                <option>Crime</option> */}
            </select>
</div>
<div className='SelectWraper'>
<p className='BrowseTitle'>Language : </p>
            <select>
                <option>--All--</option>
                <option>English</option>
                <option>Hindi</option>
                <option>Japanese</option>
                <option>Korean</option>
                <option>Chinese</option>
                <option>Bangla</option>
            </select>
</div>
<div className='SelectWraper'>
<p className='BrowseTitle'>Rating : </p>
            <select>
                <option>--All--</option>
                <option>5+</option>
                <option>6+</option>
                <option>7+</option>
                <option>8+</option>
                <option>9+</option>
            </select>
</div>
<div className='SelectWraper'>
<p className='BrowseTitle'>Year : </p>
            <select>
                <option>--All--</option>
                <option> - 2000</option>
                <option> - 2010</option>
                <option> - 2015</option>
                <option> - 2021</option>
            </select>
</div>
</div>
            </div>
        )
    }
}
