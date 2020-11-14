import React, { Component, Suspense } from "react";
const SliderDesk = React.lazy(() => import("./SliderDesk"));
const SliderMob = React.lazy(() => import("./SliderMob"));
export default class Navigation extends Component {
render() {
    return (
      <div>
        {window.innerWidth >800 ? (
          <Suspense fallback={<div></div>}>
            <SliderDesk />
          </Suspense>
        ) : (
          <Suspense fallback={<div></div>}>
            <SliderMob />
          </Suspense>
        )}
      </div>
    )
  }
}