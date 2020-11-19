import { PureComponent } from "react";
import { URL } from "../../serverUrl";
import CricketCard from './cricletCard'
export default class Tennis extends PureComponent {
  componentDidMount() {
    fetch(`${URL}api/cricket`).then((res) => {
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
          return <CricketCard key={i} data={data} />;
        })}
      </div>
    );
  }
}
