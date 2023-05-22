import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import BossAccess from "../../components/BossAccess/BossAccess";
import ReportsList from "../../components/ReportsList/ReportsList";
import "./style.css"

const Reports = () => {
    const [login, setLogin] = useState(false)

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('loginBoss'))) {
            setLogin(true)
        }
    }, []);

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('loginBoss'))) {
            setLogin(true)
        }
    }, [login]);
    return (
        <div className={"container report__container"}>
            <Link to={'/'}>На главную</Link>
            {login===false? <BossAccess setLogin={setLogin}/>: <ReportsList/>}
        </div>
    );
};

export default Reports;