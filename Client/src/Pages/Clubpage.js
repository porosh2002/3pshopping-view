import React, { PureComponent } from "react";
import Menu from "../Components/AdminMEnu/AdminMenu";
import ClubCard from './clubPagecard'
import { URL } from "../serverUrl";
export default class Deposite extends PureComponent {
  state = {
    data: [],
  };
  componentDidMount() {
      const id = this.props.match.params.id;
    fetch(`${URL}api/club/${id}`).then(res=>res.json()).then(res2=>{
        this.setState({data:res2})
    })
  }
  render() {
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
