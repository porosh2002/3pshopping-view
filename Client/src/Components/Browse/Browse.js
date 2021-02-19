import React, { Component } from 'react'
import '../../Styles/Browse.css'
export default class Browse extends Component {
    render() {
        return (
            <div>
                <form className='BrowseSearch'>
                <input spellCheck='false' className='BrowseSearchInput' type='text'/>
                <input value='Search' className='BrowseSearchBtn' type='submit' />
                </form>
            </div>
        )
    }
}
