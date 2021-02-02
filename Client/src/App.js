import React, { Component , Suspense } from 'react'
import { Switch, Route} from "react-router-dom";
import Footer from './Footer';
import Navigation from './Components/Navigation/Navigation';
const Home = React.lazy(() => import("./Pages/Home"));
const Error = React.lazy(() => import("./Pages/Error"));

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Suspense fallback={<p>Loading...</p>}>
       <Switch>
       <Route exact path="/" component={Home}/>
       <Route component={Error}/>
      </Switch>
     </Suspense>
     <Footer />
      </>
    )
  }
}
export default App