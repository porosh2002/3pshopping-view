import React, { Component,Suspense} from "react";
import { Switch, Route} from "react-router-dom";
import "./App.css";
import Loading from "./Component/Loading/Loading";
import Navigation from './Component/Navigation/Navigation'
export default class App extends Component {
  render() {
    const Home =React.lazy(() => import('./Pages/Home'));
    const Error =React.lazy(() => import('./Pages/Error'));
    const Product =React.lazy(() => import('./Pages/Product'));
    return (
      <div>
        <Navigation />
    <Suspense fallback={<Loading />}>
       <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/product" component={Product}/>
         <Route component={Error}/>
      </Switch>
     </Suspense>
      </div>
    );
  }
}
