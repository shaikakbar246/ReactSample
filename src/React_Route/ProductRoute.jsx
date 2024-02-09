import React from 'react'
import { Link,Outlet } from 'react-router-dom'

 const ProductRoute = () => {
  return (
    <div className="text-capitalize text-center mt-5">
    <div>
    <input type='search' placeholder='Search Products'/>
    </div>
    <nav>
      <Link to="featured">Featured</Link>
      <Link to="new">New</Link>
    </nav>
    <Outlet/>
    </div>
  )
}
export default ProductRoute
