import React, { useState } from 'react';
import Modal from 'react-modal';

export const Checkout = ({ isOpen, onClose, productDetails }) => {
    const product = productDetails;
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <div>
                <button onClick={onClose}>X</button>
                <h2>Detalles del Producto</h2>
                <p>{product.title}</p>
                <p>Total Price: ${product.price}</p>
                <p>Description: {product.description}</p>
                <button onClick={handleClick}>Confirm purchase</button>
                <p>{click === true ? 'gracias por su compra' : null}</p>
            </div>
        </Modal>
    );
};