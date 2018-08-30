import React from "react";

//style={{width: '400px', height: '200px'}}
const Image = (props) => {
    return (  
        <div>
            <h2>This is will each image </h2>
            {<img src={props.eachImage} alt="Italian Trulli" />}
        </div>
    )
}
export default Image;

