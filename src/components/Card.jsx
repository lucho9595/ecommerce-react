import React from 'react';
import { Link } from 'react-router-dom';
import style from '../style/Card.module.css'

export const Card = ({ id, title, price, description, image }) => {
    return (
        <div className="col" id={style.contain}>
            <div className="container h-100 shadow-sm" id={style.containData}>
                <img src={image} className="card-img-top" alt={title} id={style.img} />
                <div className="">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Description: {description}</p>
                    <div className="clearfix mb-3">
                        <p className="card-text">$ {price}</p>
                        <p className="card-text">Sku: 56632215594515</p>
                    </div>
                    <div className="text-center">
                        <Link to={`details/${id}`}>
                            <button className="btn btn-primary">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
