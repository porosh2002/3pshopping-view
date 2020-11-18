import React, { Component } from 'react'
import {URL} from '../../serverUrl'
export default class Tennis extends Component {
componentDidMount() {
    fetch(`${URL}api/tennis`).then((res) => {
        if (res.status === 200) {
          res.json().then((res) => {
            console.log(res);
          });
        }
      });
}
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
