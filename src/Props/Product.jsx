import React from 'react'

 const Product = ({id,name,APrice,OPrice}) => {
  return (
    <div className="text-capitalize text-center mt-5">
    <h1>Id:{id}</h1>
    <h1>Name:{name}</h1>
    <h1>ActualPrice:{APrice}</h1>
    <h1>OfferPrice:{OPrice}</h1>
    </div>
     
  )
}
// const Product = (p) => {
//     return (
//       <div>
//       <h1>Id:{p.id}</h1>
//       <h1>Name:{p.name}</h1>
//       <h1>ActualPrice:{p.APrice}</h1>
//       <h1>OfferPrice:{p.OPrice}</h1>
//       </div>
//     )
//   }
export default Product
