import React, { Component , Suspense } from 'react'
import { Switch, Route } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation';
import Loading from './Components/Loader/Loading'
import { connect } from "react-redux";
import { selectCurrentUser } from "./Redux/user/user_selector";
const Home = React.lazy(() => import("./Pages/Home"));
const ErrorPage = React.lazy(() => import("./Pages/Error"));
const BrowseMovie = React.lazy(() => import("./Pages/BrowseMovie"));
const Upload = React.lazy(() => import("./Pages/Upload"));
const Login = React.lazy(() => import("./Pages/Login"));
const Signup = React.lazy(() => import("./Pages/Signup"));
const Request = React.lazy(() => import("./Pages/Request"));
const ImageUpload = React.lazy(() => import("./Pages/ImageUpload"));
const MoviePage = React.lazy(() => import("./Pages/Movie"));

class App extends Component {
  render() {
    const { userID } = this.props;
    console.log(userID);
    return (
      <>
        <Navigation />
        <Suspense fallback={<Loading />}>
       <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/browse" component={BrowseMovie}/>
       <Route exact path="/upload/movie" component={Upload}/>
       <Route exact path="/community/login" component={Login}/>
       <Route exact path="/Request" component={Request}/>
       <Route exact path="/content/Image" component={ImageUpload}/>
       <Route exact path="/community/signup" component={Signup}/>
       <Route exact path="/movie/:name" component={MoviePage}/>
       <Route component={ErrorPage}/>
      </Switch>
     </Suspense>
     <Footer />
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    userID: selectCurrentUser(state),
  };
};
export default connect(mapStateToProps, null)(App)
