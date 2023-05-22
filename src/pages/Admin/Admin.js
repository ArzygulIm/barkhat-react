import React, {useState, useEffect} from 'react';
import AccessCode from "../../components/AccessCode/AccessCode";
import AdminLinks from "../../components/AdminLinks/AdminLinks";
import {Link} from "react-router-dom";
import "./style.css"

const Admin = () => {
    const [login, setLogin] = useState(false)

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('loginAccess'))) {
            setLogin(true)
        }
    }, []);

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('loginAccess'))) {
            setLogin(true)
        }
    }, [login]);
    return (
        <div className={"container admin__container"}>
            <Link to={'/'}>На главную</Link>
            {login === false ? <AccessCode setLogin={setLogin}/> : <AdminLinks/>}
        </div>
    );
};

export default Admin;