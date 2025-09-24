import React from "react";

function Card(props){
    return (
        <>
        <div className="flex  gap-10 justify-center py-4">
           <h1 className="bg-white text-black">Card </h1>
       <h1 className="bg-white text-black">Name </h1>
       <h1 className="bg-white text-black">Age </h1>
        <p>my id is {props.id}</p>
        </div>
      
        </>
    )
}
export default Card