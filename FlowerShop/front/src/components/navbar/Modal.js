// src/components/navbar/Modal.js
import React from 'react';
import './Modal.css'; // Adjust this if your CSS is in a different file

const Modal = ({ onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h2>Modal Title</h2>
                <form>
                    <input type="text" placeholder="Example Input" />
                    {/* Add more fields or charts as needed */}
                </form>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
