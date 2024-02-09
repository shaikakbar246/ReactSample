import React, { useEffect } from 'react'
import { useState } from 'react'
import EffectApiProdCard from './EffectApiProdCard'
import  "./effectapi.css"

const EffectApi = () => {


    let [products, UpdateProduct] = useState([])


    useEffect(
        () => { getPoduct() }
    )


    async function getPoduct() {
        let res = await fetch('https://fakestoreapi.com/products');
        let productList = await res.json();
        UpdateProduct(productList);
        console.log(productList);
    }


    if (products.length == 0) {
        return (
            <h1>FetchData......</h1>
        )
    }


    return (
        <>
            <div className='product-list text-capitalize text-center mt-5'>
                {
                    products.map((p) => <EffectApiProdCard {...p} key={p.id} />)
                }
            </div>
        </>
    )
 }
export default EffectApi