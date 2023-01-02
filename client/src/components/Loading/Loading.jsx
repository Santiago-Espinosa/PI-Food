import React from "react";
import image from '../../images/pizzaloading.gif'
import style from './Loading.module.css';

export default function Loading() {

    return (
        // <div className={style.conteinerLoader}>
            <div className={style.loading}>
                <img src={image} alt="" />
                {/* <span className={style.loader}></span> */}
            </div>
        // </div>
    )

}