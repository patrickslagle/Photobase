import React from "react";
import Image from './Image.js';

class Display extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: ["https://bit.ly/2Lxeweh","https://bit.ly/2Lxeweh","https://bit.ly/2PMyULV","https://bit.ly/2PMyULV"]
        }
    }
    render () {
        let imageShow = this.state.images.map((eachImage, i)=>(
            <Image eachImage={eachImage} key={i} />
        ))
        return (
            <div className="display">
                <h2>This will be  display of the images </h2>
                {imageShow}
            </div>
        )
    } 
}
export default Display;