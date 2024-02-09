import React from "react";
import Example1Sub from "./Example1Sub";
let CyMovies = [{
    title: "Josh",
    imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnRwaP9Upx_g7jL8Evn4JhfR7ZknMrW_rzKQ&usqp=CAU",
    Description: "Nagachaitanya first movie"
},
{
    title: "Yemayachesave",
    imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB4JJ7q2JxK5DnzKYFPw4xOxXuzJqfoEABxw&usqp=CAU",
    Description: "Nagachaitanya Second movie"
}
]

const Example1 = () => {
    return (
        <>
            {/* <Example1Sub title={CyMovie1.title} imgURL={CyMovie1.imgURL} Description={CyMovie1.Description}/>
        <Example1Sub title={Chymovie2.title} imgURL={Chymovie2.imgURL} Description={Chymovie2.Description}/> */}
            {
                CyMovies.map((eachObject) => {
                    return <Example1Sub title={eachObject.title} imgURL={eachObject.imgURL} Description={eachObject.Description} />
                }
                )
            }
        </>
    )
}
export default Example1;