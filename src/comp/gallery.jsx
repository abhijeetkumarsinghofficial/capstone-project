import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css'
const Gallery = () =>{
    const [images, setImages] = useState([]);

    useEffect(() => {
      axios
        .get("https://abhijeetkumarsinghofficial.github.io/testapi/data.json")
        .then((res) => setImages(res.data));
    }, []);
  
    return (
        <div className="card-main">
        <div className="card-container">
        {images.map((image) => (
          <div key={image.id} className="card">
            <img src={image.url} alt={image.title} />
            <p className="title">{image.title}</p>
            <div className="card-hover-layer"></div>
          </div>
        ))}
      </div>
      </div>
    )
}

export default Gallery;