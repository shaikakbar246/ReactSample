import React from 'react'
import Products from './Products'
// const Productlist = ({data}) => {
const Productlist = () => {
    return (
        <div className="text-capitalize text-center mt-5">
            <h1>This is Productlist Component</h1>
            {/* <Products data={data}></Products> */}
            <Products></Products>
        </div>
    )
}
export default Productlist
