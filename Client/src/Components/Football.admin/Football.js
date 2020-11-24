import { PureComponent } from "react";
import { URL } from "../../serverUrl";
import FootballCard from './FootballCard'
export default class Tennis extends PureComponent {
  componentDidMount() {
    fetch(`${URL}api/football`,{
      method: "post",
      headers: {"Content-Type": "application/json"},
    }).then(res=>res.json()).then(res=>this.setState({data:res}))
  }
  state = {
    data: [],
  };
  render() {
    return (
      <div>
        {this.state.data.map((data, i) => {
          return <FootballCard key={i} data={data} />;
        })}
      </div>
    );
  }
}
