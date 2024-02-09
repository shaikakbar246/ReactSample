import React from "react";

const Example1Sub=({title,imgURL,Description})=>{
    return(
        <article className="moviename">
            <h1>{title||"Random Title"}</h1>
            <img src={imgURL} alt="show"/>
            <p>{Description}</p>
        </article>
    );
};

export default Example1Sub;