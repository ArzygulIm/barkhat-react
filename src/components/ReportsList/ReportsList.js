import React, {useState, useEffect} from 'react';
import {REPORTS_API} from "../../config";
import Table from "react-bootstrap/Table";
import Button from "@mui/material/Button";

const ReportsList = () => {
    const [reports, setReports] = useState([])
    const getReports = () => {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        fetch(REPORTS_API, {
            method: 'GET',
            headers: headers
        })
            .then(response => response.json())
            .then(json => {
                setReports(json)
            })
            .catch(error => console.log('Authorization failed: ' + error.message));
    }

    const deleteReport = (id) => {
        console.log(id)
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        fetch(REPORTS_API+"/"+id, {
            method: 'DELETE',
            headers: headers
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                getReports()
            })
            .catch(error => console.log('Authorization failed: ' + error.message));
    }

    useEffect(() => {
        getReports()
    }, []);
    return (
        <Table bordered hover>
            <thead>
            <tr>
                <th>№</th>
                <th>Модель</th>
                <th>Количество</th>
                <th>Дата начало</th>
                <th>Дата конец</th>
                <th>Возможные причины опоздания</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {reports.map((el, index)=>{
                return(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{el.model}</td>
                        <td>{el.quantity}</td>
                        <td>{el.startDate}</td>
                        <td>По плану: {el.deadline.byPlan} <br/>По факту: {el.deadline.byFact}</td>
                        <td>{el.reasons.map((reason, i)=>{
                                return(
                                    <p key={i}>{reason}</p>
                                )})}
                        </td>
                        <td><Button variant="contained" color="success" onClick={()=>deleteReport(el._id)}>Удалить</Button></td>
                    </tr>
                )
            })}

            </tbody>
        </Table>
    );
};

export default ReportsList;