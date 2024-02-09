import React from 'react'
import { useLocation,useParams } from 'react-router-dom'

 const User = () => {
    // let{id,name}=useParams();
    let routeParams=useParams();
    let QueryParams=useLocation();
    let Query_Params=new URLSearchParams(QueryParams.search);
    let category=Query_Params.get('category')
    let posts=Query_Params.get('posts')

  return (
    <div className="text-capitalize text-center mt-5">
    <h1>ID:{routeParams.id}</h1>
    <h1>Name:{routeParams.name}</h1>
    <h1>Category:{category}</h1>
    <h1>Posts:{posts}</h1>
      {/* <User {...Params}/> */}
    </div>
  )
}

export default User
