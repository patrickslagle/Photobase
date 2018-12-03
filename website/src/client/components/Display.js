import React from "react";
import Image from './Image.js';

const Display = ({ images }) => {
  const imageShow = images.map((eachImage, i) => (
    <Image eachImage={eachImage.uri} key={i} />
  ));
  return (
    <div className="picture-display-container">
      {imageShow}
    </div>
  )
}
export default Display;
