import React, { Component, Suspense } from "react";
import Loading from '../Loader/Loading'
import TopNav from "./TopNav";
const NavDesk = React.lazy(() => import("./Desk"));
const NavMob = React.lazy(() => import("./Mob"));
export default class Navigation extends Component {
render() {
    return (
      <>
      <TopNav />
        {window.innerWidth >1279 ? (
          <Suspense fallback={<Loading />}>
            <NavDesk />
          </Suspense>
        ) : (
          <Suspense fallback={<Loading />}>
            <NavMob />
          </Suspense>
        )}
      </>
    )
  }
}