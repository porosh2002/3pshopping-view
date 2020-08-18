import React, { Component, Suspense } from 'react'
import Loading from '../Component/Loading/Loading'
export default class Product extends Component {
    render() {
        const ProductDesk =React.lazy(() => import('../Pages/Product-Filter-desk'));
        const ProductMob =React.lazy(() => import('../Pages/Product-filter-mob'));
        return (
            <div>
        {window.innerWidth > 900 ? (
          <Suspense fallback={<Loading />}>
            <ProductDesk />
          </Suspense>
        ) : (
          <Suspense fallback={<Loading />}>
            <ProductMob />
          </Suspense>
        )}
            </div>
        )
    }
}
