import React from "react";

const Image = ({ eachImage }) => (  
  <div>
    <img src={eachImage} className="image" alt="Italian Trulli" />
  </div>
);

export default Image;
