import React, { Component, Suspense } from "react";
import Loading from '../Loader/Loading'
const NavDesk = React.lazy(() => import("./Desk"));
const NavMob = React.lazy(() => import("./Mob"));
export default class Navigation extends Component {
render() {
    return (
      <>
        {window.innerWidth >900 ? (
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