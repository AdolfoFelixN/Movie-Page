import React from "react";
import '../styles/modal.css'

export const Modal = ({title, description, image, vote}) => {
  return (
    <div className="modal">

      <div className="imageAndDescription">
        <img src={image} alt={`${title}`} />
        <div className="description">
            <h3>{title}</h3>
            <p><strong>Film rating:</strong> {vote}</p>
            <p><strong>Description:</strong> {description}</p>
        </div>
        
      </div>      
    </div>
  );
};
