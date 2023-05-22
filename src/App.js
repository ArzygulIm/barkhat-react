import React from 'react';
import {Routes, Route} from "react-router-dom";
import Main from './pages/Main/Main'
import Admin from "./pages/Admin/Admin";
import Client from './pages/Client/Client'
import Reports from './pages/Reports/Reports'

const App = () => {
    return (
        <Routes>
            <Route exact path={"/"} element={<Main/>}/>
            <Route exact path={"/admin"} element={<Admin/>}/>
            <Route exact path={"/client"} element={<Client/>}/>
            <Route exact path={"/reports"} element={<Reports/>}/>
        </Routes>
    );
};

export default App;