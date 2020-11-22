import React, { PureComponent } from "react";
import Menu from "../Components/AdminMEnu/AdminMenu";
import DepoCard from './Depositecard'
import { URL } from "../serverUrl";
export default class Deposite extends PureComponent {
  state = {
    data: [],
  };
  componentDidMount() {
    fetch(`${URL}api/deposite`)
      .then((res) => res.json())
      .then((res) => this.setState({ data: res }));
  }
  render() {
    console.log(this.state.data);
    return (
      <div>
        <Menu />
        {this.state.data.map((data, i) => {
          return  <DepoCard key={i} data={data}/>
        })}
      </div>
    );
  }
}
