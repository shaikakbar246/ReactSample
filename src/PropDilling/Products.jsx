import React from 'react'
import {context} from "./PropDrill"
import { useContext } from 'react';

//  const Products = ({data}) => {
    const Products = () => {
      let isAdmin  =useContext(context);
  return (
    <div className="text-capitalize text-center mt-5">
    <h1>This Product Component</h1>
    {/* <h2>isAdmin:{data}</h2> */}
    <h2>isAdmin:{isAdmin}</h2>
    </div>
  )
}
export default Products
