import React from 'react';
import style from './Home.module.css';
import { NavLink } from 'react-router-dom';


export default function Home() {
    return (
        <div className={style.background} >
            
            <div className={style.card}>
                <div className={style.text}>
                <h1> Santiago Espinosa </h1>
            </div>
                <img src="https://i.postimg.cc/3N5t68fJ/Logo-Henry-Food.png" alt="logo" />
                {/* https://i.postimg.cc/nzGt0PT5/Henry-Food.png */}
                <NavLink to="/recipes">
                    <button className={style.button}>INGRESAR</button>
                </NavLink>
                <div className={style.socialDiv}>
                    <a target="_blank" href="https://www.linkedin.com/in/santiagoespinosa-dev/" rel='noreferrer'><img src="https://i.postimg.cc/xThMr2PB/logo-Linkedin.png" alt="github" />LINKEDIN</a>
                    <a target="_blank" href="https://github.com/Santiago666espinosa" rel='noreferrer'><img src="https://i.postimg.cc/Vs9NRcSz/logo-Git-Hub.png" alt="github" />GITHUB</a>
                </div>
            </div>
        </div>
    )
}