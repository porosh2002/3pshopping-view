import { PureComponent } from "react";
import { URL } from "../../serverUrl";
import TennisCard from "./TennisCard";
export default class Tennis extends PureComponent {
  componentDidMount() {
    fetch(`${URL}api/tennis`).then((res) => {
      if (res.status === 200) {
        res.json().then((res) => {
          this.setState({ data: res });
        });
      }
    });
  }
  state = {
    data: [],
  };
  render() {
    return (
      <div>
        {this.state.data.map((data, i) => {
          return <TennisCard key={i} data={data} />;
        })}
      </div>
    );
  }
}
