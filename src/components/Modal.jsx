import React, { useState } from "react";
import "../styles/modal.css";

export const Modal = ({ title, description, image, vote, onClose }) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="modal">
      <div className="imageAndDescription">
        <img src={image} alt={`${title}`} />
        <div className="description">
          <div className="closeButton">            
            <i className="bi bi-x-square-fill closeButton" onClick={onClose}></i>
          </div>
          <h3>{title}</h3>
          <p>
            <strong>Film rating:</strong> {vote}
          </p>
          <p>
            <strong>Description:</strong> {description}
          </p>
        </div>
      </div>
    </div>
  );
};
