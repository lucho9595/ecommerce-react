import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from '../style/Checkout.module.css';

export const Checkout = ({ isOpen, onClose, productDetails }) => {
    const product = productDetails;
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>
            <div>
                <button onClick={onClose} className={styles.btn}>X</button>
                <h2>Detalles del Producto</h2>
                <p>{product.title}</p>
                <p>Total Price: ${product.price}</p>
                <p>Description: {product.description}</p>
                <button onClick={handleClick} className={styles.btn}>Confirm purchase</button>
                <p className={styles.description}>{click === true ? 'Thanks for your purchase!' : null}</p>
            </div>
        </Modal>
    );
};