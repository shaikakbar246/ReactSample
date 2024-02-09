import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function useGetApiData(url){
let [Data,setProduct]=useState({})
    useEffect(()=>{
        getData()

    },[])
async function getData(){
    let res = await fetch(url);
    let ApiData = await res.json();
    console.log(ApiData);

    setProduct(ApiData);
}
return Data
}
export default useGetApiData
