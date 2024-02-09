import React from "react";

const intialstate={
    firstname:"akbar",
    phonenimber:"7013732814",
    email:"shaikakbar246@gmail.com"
}

export const UserContext=React.createContext();

export const UserContextProvider=({children})=>{
    return(
    <UserContext.Provider value={intialstate}>{children}</UserContext.Provider>
    )
}