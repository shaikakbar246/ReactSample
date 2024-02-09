import React from 'react'
import Product from './Product'
 const PropDestruct = () => {
    let prod1={
        id:1,
        name:"Lenovo Laptop",
        APrice:2000,
        OPrice:10000
    }
  return (
//    <Product id={prod1.id} name={prod1.name} APrice={prod1.APrice} OPrice={prod1.OPrice}/>
   <Product {...prod1}/>
  )
}
export default PropDestruct
