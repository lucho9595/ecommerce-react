import React, { useEffect, useState } from 'react';
import { getAll } from '../api/fetchData';
import { Navbar } from '../components/Navbar';
import { Card } from '../components/Card';
import { Loading } from '../utils/Loading';
import styles from '../style/Home.module.css';

export const Home = () => {
    const [products, setProducts] = useState([]);

    const getInfo = async () => {
        try {
            const result = await getAll()
            setProducts(result)
        } catch (error) {
            console.log('error', error)
        }
    }

    useEffect(() => {
        getInfo()
    }, []);

    return (
        <div className={styles.container}>
            <Navbar />
            <h1 className="text-center">List of Products</h1>
            <div className="row row-cols-1 row-cols-s-2 row-cols-m-2 row-cols-lg-3  justify-content-center align-items-center">
                {products.length !== 0 ? (
                    products.map((product) => (
                        <Card {...product} key={product.id} />
                    ))
                ) : (
                    <Loading />
                )}
            </div>
        </div>
    )
}