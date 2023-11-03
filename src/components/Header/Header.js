import React from 'react';
import {Link} from "react-router-dom";
import css from './Header.module.css';

const Header = () => {
    return (
        <div>
            <div className={css.Header}>
                <Link to={'/todos'}>todos</Link>
                <Link to={'/albums'}>albums</Link>
                <Link to={'/comments'}>comments</Link>
            </div>
        </div>
    );
};

export {Header};