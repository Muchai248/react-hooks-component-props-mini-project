import React from "react"


function About({ image, text }) {
    const defaultImage = "https://via.placeholder.com/215";
    const altText = "blog logo";
  
    return (
      <aside>
        <img src={image || defaultImage} alt={altText} />
        <p>{text}</p>
      </aside>
    );
  }
  
  export default About;