import React, { Component, Suspense } from "react";
import Loading from '../Loader/Loading'
const NavDesk = React.lazy(() => import("./Desk"));
const NavMob = React.lazy(() => import("./Mob"));
export default class Navigation extends Component {
render() {
    return (
      <>
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