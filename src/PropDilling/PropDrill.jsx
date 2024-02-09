import React, { createContext } from 'react'
import Home from './Home'

export const context=createContext();

 const PropDrill = () => {
    let isAdmin='true';
  return (
    // <Home data={isAdmin}></Home> if we use createContext() don't need to pass the variable in component
    //Under the value we can pass any thing like string,value,object,arrray
    <div className="text-capitalize text-center mt-5">
     <context.Provider value={isAdmin}> 
     <Home></Home>
     </context.Provider>
    </div>
  )
}

// if we want to access parent variable in grand child. Like PropDrill(Parent)->Home(Child)->ProductList(GrandChild)->Products(GrandGrandChild) we have to do propsdrilling 
//using props drilling we unnesscery code using in child components Home(Child)->ProductList(GrandChild) .
//So that to Avoid Uncessary code we can use useContext Hooks

export default PropDrill

