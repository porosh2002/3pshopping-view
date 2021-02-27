import React, { Component , Suspense } from 'react'
import { Switch, Route } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation';
import Loading from './Components/Loader/Loading'
const Home = React.lazy(() => import("./Pages/Home"));
const ErrorPage = React.lazy(() => import("./Pages/Error"));
const BrowseMovie = React.lazy(() => import("./Pages/BrowseMovie"));
const Upload = React.lazy(() => import("./Pages/Upload"));
const Login = React.lazy(() => import("./Pages/Login"));
const Signup = React.lazy(() => import("./Pages/Signup"));
const Request = React.lazy(() => import("./Pages/Request"));

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Suspense fallback={<Loading />}>
       <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/browse" component={BrowseMovie}/>
       <Route exact path="/upload" component={Upload}/>
       <Route exact path="/login" component={Login}/>
       <Route exact path="/Request" component={Request}/>
       <Route exact path="/signup" component={Signup}/>
       <Route component={ErrorPage}/>
      </Switch>
     </Suspense>
     <Footer />
      </>
    )
  }
}
export default App