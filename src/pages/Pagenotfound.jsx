import React from 'react';
import style from '../style/Pagenotfound.module.css';

export const Pagenotfound = () => {
    return (
        <section className={style.page_404}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12" id={style.col12}>
                        <div className="col-sm-10 col-sm-offset-1  text-center" id={style.col10}>
                            <div className={style.four_zero_four_bg}>
                                <h1 className="text-center ">404</h1>
                            </div>
                            <div className={style.contant_box_404}>
                                <h3 className="h2">
                                    Look like you're lost
                                </h3>
                                <p>the page you are looking for not avaible!</p>
                                <a href="/" className={style.link_404}>Go to Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
