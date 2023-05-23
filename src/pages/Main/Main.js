import React from 'react';
import {Link} from "react-router-dom";
import {LINES_API} from "../../config";
import "./style.css"

const Main = () => {
    console.log(LINES_API)
    console.log(process.env.REACT_APP_API)
    return (
        <div className={'container main__container'}>
            <Link to={'/admin'} className={"main__links"}>Админ</Link>
            <Link to={'/reports'} className={"main__links"}>Отчеты</Link>
            <Link to={'/client'} className={"main__links"}>Клиент</Link>
        </div>
    );
};

export default Main;