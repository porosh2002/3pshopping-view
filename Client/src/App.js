import React, { Component , Suspense } from 'react'
import { Switch, Route} from "react-router-dom";
import Footer from './Footer';
import Navigation from './Components/Navigation/Navigation';
import Loading from './Components/Loader/Loading'
const Home = React.lazy(() => import("./Pages/Home"));
const Error = React.lazy(() => import("./Pages/Error"));

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Suspense fallback={<Loading />}>
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