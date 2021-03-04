import React, { Component } from 'react'

export default class Title extends Component {

    render() {
        const {Text,
            // filter
        } = this.props;
        return (
            <div className='TitleDiv'>
                <p className='TitleText'>{Text}</p>
            </div>
        )
    }
}
