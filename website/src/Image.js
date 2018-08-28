import React from "react";


const Image = (props) => {
    return (  
        <div>
            <h2>This is will each image </h2>
            {<img src={props.eachImage} alt="Italian Trulli" style={{width: '400px', height: '200px'}}/>}
        </div>
    )
}
export default Image;
