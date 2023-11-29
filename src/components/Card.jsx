import React from 'react';
import { Link } from 'react-router-dom';
import style from '../style/Card.module.css'

export const Card = ({ id, title, price, description, image }) => {
    return (
        <div class="col" id={style.contain}>
            <div class="card h-100 shadow-sm" id={style.containData}>
                <img src={image} class="card-img-top" alt={title} id={style.img} />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">Description: {description}</p>
                    <div class="clearfix mb-3">
                        <p class="card-text">$ {price}</p>
                        <p class="card-text">Sku: 56632215594515</p>
                    </div>
                    <div class="text-center">
                        <Link to={`details/${id}`}>
                            <button class="btn btn-primary">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
