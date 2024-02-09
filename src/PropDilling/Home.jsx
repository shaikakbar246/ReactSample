import React from 'react'
import Productlist from './Productlist'
//  const Home = ({data}) => {
 const Home = () => {

  return (
    <div className="text-capitalize text-center mt-5">
    <h1>This is Home Component</h1>
    {/* <h2>Admin:{data}</h2> */}
    {/* <Productlist data={data}></Productlist> */}
    <Productlist></Productlist>
    </div>
  )
}

export default Home