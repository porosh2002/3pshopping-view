import React, { Component, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./Footer";
import { connect } from "react-redux";
import Navigation from "./Components/Navigation/Navigation";
import { selectCurrentUser } from "./Redux/user/user_selector";
const Home = React.lazy(() => import("./Pages/Home"));
const Error = React.lazy(() => import("./Pages/Error"));
const Login = React.lazy(() => import("./Pages/Login"));
const Signup = React.lazy(() => import("./Pages/Signup"));
const Admin = React.lazy(() => import("./Pages/Admin"));
const User = React.lazy(() => import("./Pages/User"));
const Football = React.lazy(() => import("./Pages/Football"));
const Cricket = React.lazy(() => import("./Pages/Cricket"));
const Tennis = React.lazy(() => import("./Pages/Tennis"));
const MatchResult = React.lazy(() => import("./Pages/MatchResult"));
class App extends Component {
  render() {

    // !!!!!!!!!! 
    const { userID } = this.props;
    // console.log(userID);
    // !!!!!!!!!! 

    return (
      <div>
        <Navigation />
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" render={()=>userID !== undefined ? (<Redirect to='/user' />):(<Login />)} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/user" render={()=>userID === undefined ? (<Redirect to='/login' />):(<User />)} />
            <Route exact path="/football" component={Football} />
            <Route exact path="/cricket" component={Cricket} />
            <Route exact path="/tennis" component={Tennis} />
            <Route exact path="/result" component={MatchResult} />
            <Route component={Error} />
          </Switch>
        </Suspense>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userID: selectCurrentUser(state),
  };
};
export default connect(mapStateToProps, null)(App);
