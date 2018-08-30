import React from "react";

const Image = (props) => {
    return (  
        <div>
            {<img src={props.eachImage} className="image" alt="Italian Trulli" />}
        </div>
    )
}
export default Image;

