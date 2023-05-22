import React from 'react';
import {Link} from "react-router-dom";
import "./style.css"

const Main = () => {
    return (
        <div className={'main__container'}>
            <Link to={'/admin'}>Админ</Link>
            <Link to={'/reports'}>Отчеты</Link>
            <Link to={'/client'}>Клиент</Link>
        </div>
    );
};

export default Main;