import React, { Component, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./Footer";
import { connect } from "react-redux";
import Navigation from "./Components/Navigation/Navigation";
import { selectCurrentUser,selectCurrentAdmin } from "./Redux/user/user_selector";
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
const Deposite = React.lazy(() => import("./Pages/Deposite"));
const Payment = React.lazy(() => import("./Pages/Payment"));
const AdminCheck = React.lazy(() => import("./Pages/AdminLogin"));
class App extends Component {
  render() {

    // !!!!!!!!!! 
    const { userID,adminID } = this.props;
    // !!!!!!!!!! 

    return (
      <div>
        <Navigation />
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" render={()=>userID !== undefined ? (<Redirect to='/user' />):(<Login />)} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/admin" render={()=>adminID === false ? (<Redirect to='/with_wecubs' />):(<Admin />)} />
            <Route exact path="/user" render={()=>userID === undefined ? (<Redirect to='/login' />):(<User />)} />
            <Route exact path="/football" component={Football} />
            <Route exact path="/cricket" component={Cricket} />
            <Route exact path="/tennis" component={Tennis} />
            <Route exact path="/payment"  render={()=>adminID === false ? (<Redirect to='/with_wecubs' />):(<Payment />)} />
            <Route exact path="/deposite"  render={()=>adminID === false ? (<Redirect to='/with_wecubs' />):(<Deposite />)} />
            <Route exact path="/result"  render={()=>adminID === false ? (<Redirect to='/with_wecubs' />):(<MatchResult />)} />
            <Route exact path="/with_wecubs" render={()=>adminID === true ? (<Redirect to='/admin' />):(<AdminCheck />)} />
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
     adminID : selectCurrentAdmin(state)
  };
};
export default connect(mapStateToProps, null)(App);
