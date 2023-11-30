import React from 'react';
import { Link } from 'react-router-dom';
import style from '../style/Card.module.css';

export const Card = ({ id, title, price, description, image }) => {
    return (
        <div className={`col ${style.cardContainer}`}>
            <div className={`container h-100 shadow-sm ${style.card}`}>
                <img src={image} className={`card-img-top ${style.cardImage}`} alt={title} />
                <div className={`card-body ${style.cardBody}`}>
                    <h5 className={`card-title ${style.cardTitle}`}>{title}</h5>
                    <p className={`card-text ${style.cardDescription}`}>Description: {description}</p>
                    <div className={`clearfix mb-3 ${style.cardInfo}`}>
                        <p className={`card-text ${style.cardPrice}`}>$ {price}</p>
                        <p className={`card-text ${style.cardSku}`}>Sku: 56632215594515</p>
                    </div>
                    <div className={`text-center ${style.cardButton}`}>
                        <Link to={`details/${id}`}>
                            <button className={`btn btn-primary`}>Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
