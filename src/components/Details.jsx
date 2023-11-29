import React, { useEffect, useState } from 'react';
import { getProduct } from '../api/fetchData';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styles from '../style/Details.module.css';

export const Details = () => {
    const [product, setProduct] = useState(null);
    const [click, setClick] = useState(false)
    const { id } = useParams()

    const fetchProduct = async () => {
        try {
            if (id) {
                const result = await getProduct(id);
                setProduct(result);
            } else {
                console.error('ID is not defined');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleClick = () => {
        setClick(!click)
    }

    useEffect(() => {
        fetchProduct();
    }, [id]);

    return (
        <div className={styles.container}>
            {product &&
                <div className={styles.containerInfo}>
                    <Link to='/'>
                        <button className={styles.btn}>Go Back</button>
                    </Link>
                    <h3>{product.title}</h3>
                    <p>Category: {product.category}</p>
                    <img src={product.image} className={styles.images} />
                    <p>Description: {product.description}</p>
                    <p>$ {product.price}</p>
                    <p>Stock: {product.rating.count}</p>
                    <p>Rate: {product.rating.rate}</p>
                    <p>Sku: 56632215594515</p>
                    <Link to={`/checkout/${product.id}`}>
                        <button onClick={handleClick} className={styles.btn}>Buy</button>
                    </Link>
                    <p className={styles.thanks}>{click === true ? "Gracias por su compra" : null}</p>
                </div>
            }
        </div >
    );
}