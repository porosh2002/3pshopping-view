import React, { PureComponent } from "react";
import Menu from "../Components/AdminMEnu/AdminMenu";
import ClubCard from './Clubcard'
import { URL } from "../serverUrl";
export default class Deposite extends PureComponent {
  state = {
    data: [],
  };
  componentDidMount() {
    fetch(`${URL}api/club`)
      .then((res) => res.json())
      .then((res) => this.setState({ data: res }));
  }
  render() {
    console.log(this.state.data);
    return (
      <div>
        <Menu />
        {this.state.data.map((data, i) => {
          return  <ClubCard key={i} data={data}/>
        })}
      </div>
    );
  }
}
