import React from "react";
import Image from './Image.js';

const Display = props => {
        console.log('what are props?', props); 
        let imageShow = props.images.map((eachImage, i)=>(
            <Image eachImage={eachImage.uri} key={i} />
        ))
        return (
            <div className="picture-display-container">
                {imageShow}
            </div>
        )
}
export default Display;