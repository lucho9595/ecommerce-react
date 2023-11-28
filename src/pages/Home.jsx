import React, { useEffect, useState } from 'react';
import { getAll } from '../api/fetchData'
import { Navbar } from '../components/Navbar';
import { Card } from '../components/Card';
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

    console.log(products)

    return (
        <div>
            <Navbar />
            <h1 className="text-center">List of Products</h1>
            <div>
                {products.length !== 0 ? (
                    products.map((product) => (
                        <Card {...product} key={product.id} />
                    ))
                ) : (
                    <div>
                        <p>Loading...</p>
                    </div>
                )}
            </div>
        </div>
    )
}