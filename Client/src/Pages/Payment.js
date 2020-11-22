import React, { PureComponent } from "react";
import Menu from "../Components/AdminMEnu/AdminMenu";
import PayCard from './PaymentCard'
import { URL } from "../serverUrl";
export default class Deposite extends PureComponent {
  state = {
    data: [],
  };
  componentDidMount() {
    fetch(`${URL}api/outmoney`)
      .then((res) => res.json())
      .then((res) => this.setState({ data: res }));
  }
  render() {
    return (
      <div>
        <Menu />
        {this.state.data.map((data, i) => {
          return  <PayCard key={i} data={data}/>
        })}
      </div>
    );
  }
}
