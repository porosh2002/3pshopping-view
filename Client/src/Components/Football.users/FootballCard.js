import React, { PureComponent } from "react";
// import { URL } from "../../serverUrl";
import { selectCurrentUser } from "../../Redux/user/user_selector";
import { connect } from "react-redux";
class TennisCard extends PureComponent {
  state = {
    userid:'',
  };
  componentDidMount() {
console.log(this.props.userID);
  }
  render() {
    return (
      <div>

      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userID: selectCurrentUser(state),
  };
};
export default connect(mapStateToProps, null)(TennisCard);
