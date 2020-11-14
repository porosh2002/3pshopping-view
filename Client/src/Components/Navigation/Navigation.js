import React, { Component, Suspense } from "react";
import './Navigation.css'
const NavDesk = React.lazy(() => import("./NavDesk"));
const NavMob = React.lazy(() => import("./NavMob"));
export default class Navigation extends Component {
render() {
    return (
      <div className='navigation'>
        {window.innerWidth >800 ? (
          <Suspense fallback={<div></div>}>
            <NavDesk />
          </Suspense>
        ) : (
          <Suspense fallback={<div></div>}>
            <NavMob />
          </Suspense>
        )}
      </div>
    )
  }
}