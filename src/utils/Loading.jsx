import React from "react";
import loading from '../assets/loadingCart.gif';
import styles from '../style/Loading.module.css';

export const Loading = () => {
    return (
        <div className={styles.container}>
            <img src={loading} alt="" />
        </div>
    )
};
