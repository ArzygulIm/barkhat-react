import React, {useState} from 'react';
import Table from "react-bootstrap/Table";
import "./style.css"
import {LINES_API, REPORTS_API} from "../../config";
import ReportTableCell from "../ReportTableCell/ReportTableCell";

const ReportTable = ({elem, getLines}) => {
    const postReportPerHour = (data) => {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json')

        fetch(LINES_API + "/" + elem._id, {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                postReports()
            })
            .catch(error => console.log(error.message));
    }

    const getTodayDate = () => {
        const d = new Date()
        return (`${Math.floor(d.getDate() / 10)}${d.getDate() % 10}.${Math.floor((d.getMonth() + 1) / 10)}${(d.getMonth() + 1) % 10}.${d.getFullYear()}`)
    }
    const getHourReport = (hours) => {
        return elem.reportPerHour.filter(el => el.date === getTodayDate() && el.hours === hours)
    }
    const postReports = () => {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json')

        fetch(REPORTS_API, {
            method: 'POST',
            headers: headers,
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
            })
            .catch(error => console.log(error.message));
        getLines()
    }
    return (
        <Table bordered hover>
            <thead>
            <tr>
                <th className={"table__header"}>Часы</th>
                <th className={"table__header"}>Дата <br/> {getTodayDate()}</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className={"table__hours-cell"}>08:00-09:00</td>
                <td>
                    {getHourReport("08:00-09:00").length > 0 ? `Количество: ${getHourReport("08:00-09:00")[0].quantity} Работники: ${getHourReport("08:00-09:00")[0].workers}` :
                        <ReportTableCell elem={elem} hours={"08:00-09:00"} date={getTodayDate()}
                                         postReportPerHour={postReportPerHour} postReports={postReports}/>}
                </td>
            </tr>
            <tr>
                <td className={"table__hours-cell"}>09:00-10:00</td>
                <td>
                    {getHourReport("09:00-10:00").length > 0 ? `Количество: ${getHourReport("09:00-10:00")[0].quantity} Работники: ${getHourReport("09:00-10:00")[0].workers}` :
                        <ReportTableCell elem={elem} hours={"09:00-10:00"} date={getTodayDate()}
                                         postReportPerHour={postReportPerHour}  postReports={postReports}/>}
                </td>
            </tr>
            <tr>
                <td className={"table__hours-cell"}>10:00-11:00</td>
                <td>
                    {getHourReport("10:00-11:00").length > 0 ?`Количество: ${getHourReport("10:00-11:00")[0].quantity} Работники: ${getHourReport("10:00-11:00")[0].workers}` :
                        <ReportTableCell elem={elem} hours={"10:00-11:00"} date={getTodayDate()}
                                         postReportPerHour={postReportPerHour}  postReports={postReports}/>}
                </td>
            </tr>
            <tr>
                <td className={"table__hours-cell"}>11:00-12:00</td>
                <td>
                    {getHourReport("11:00-12:00").length > 0 ?`Количество: ${getHourReport("11:00-12:00")[0].quantity} Работники: ${getHourReport("11:00-12:00")[0].workers}` :
                        <ReportTableCell elem={elem} hours={"11:00-12:00"} date={getTodayDate()}
                                         postReportPerHour={postReportPerHour}  postReports={postReports}/>}
                </td>
            </tr>
            <tr>
                <td className={"table__hours-cell"}>12:00-13:00</td>
                <td>
                    {getHourReport("12:00-13:00").length > 0 ?`Количество: ${getHourReport("12:00-13:00")[0].quantity} Работники: ${getHourReport("12:00-13:00")[0].workers}` :
                        <ReportTableCell elem={elem} hours={"12:00-13:00"} date={getTodayDate()}
                                         postReportPerHour={postReportPerHour}  postReports={postReports}/>}
                </td>
            </tr>
            <tr>
                <td className={"table__hours-cell"}>13:00-14:00</td>
                <td>
                    {getHourReport("13:00-14:00").length > 0 ?`Количество: ${getHourReport("13:00-14:00")[0].quantity} Работники: ${getHourReport("13:00-14:00")[0].workers}` :
                        <ReportTableCell elem={elem} hours={"13:00-14:00"} date={getTodayDate()}
                                         postReportPerHour={postReportPerHour}  postReports={postReports}/>}
                </td>
            </tr>
            <tr>
                <td className={"table__hours-cell"}>14:00-15:00</td>
                <td>
                    {getHourReport("14:00-15:00").length > 0 ?`Количество: ${getHourReport("14:00-15:00")[0].quantity} Работники: ${getHourReport("14:00-15:00")[0].workers}` :
                        <ReportTableCell elem={elem} hours={"14:00-15:00"} date={getTodayDate()}
                                         postReportPerHour={postReportPerHour}  postReports={postReports}/>}
                </td>
            </tr>
            <tr>
                <td className={"table__hours-cell"}>15:00-16:00</td>
                <td>
                    {getHourReport("15:00-16:00").length > 0 ?`Количество: ${getHourReport("15:00-16:00")[0].quantity} Работники: ${getHourReport("15:00-16:00")[0].workers}` :
                        <ReportTableCell elem={elem} hours={"15:00-16:00"} date={getTodayDate()}
                                         postReportPerHour={postReportPerHour}  postReports={postReports}/>}
                </td>
            </tr>
            <tr>
                <td className={"table__hours-cell"}>16:00-17:00</td>
                <td>
                    {getHourReport("16:00-17:00").length > 0 ?`Количество: ${getHourReport("16:00-17:00")[0].quantity} Работники: ${getHourReport("16:00-17:00")[0].workers}` :
                        <ReportTableCell elem={elem} hours={"16:00-17:00"} date={getTodayDate()}
                                         postReportPerHour={postReportPerHour}  postReports={postReports}/>}
                </td>
            </tr>
            <tr>
                <td className={"table__hours-cell"}>17:00-18:00</td>
                <td>
                    {getHourReport("17:00-18:00").length > 0 ?`Количество: ${getHourReport("17:00-18:00")[0].quantity} Работники: ${getHourReport("17:00-18:00")[0].workers}` :
                        <ReportTableCell elem={elem} hours={"17:00-18:00"} date={getTodayDate()}
                                         postReportPerHour={postReportPerHour}  postReports={postReports}/>}
                </td>
            </tr>
            <tr>
                <td className={"table__hours-cell"}>18:00-19:00</td>
                <td>
                    {getHourReport("18:00-19:00").length > 0 ?`Количество: ${getHourReport("18:00-19:00")[0].quantity} Работники: ${getHourReport("18:00-19:00")[0].workers}` :
                        <ReportTableCell elem={elem} hours={"18:00-19:00"} date={getTodayDate()}
                                         postReportPerHour={postReportPerHour}  postReports={postReports}/>}
                </td>
            </tr>
            <tr>
                <td className={"table__hours-cell"}>19:00-20:00</td>
                <td>
                    {getHourReport("19:00-20:00").length > 0 ?`Количество: ${getHourReport("19:00-20:00")[0].quantity} Работники: ${getHourReport("19:00-20:00")[0].workers}` :
                        <ReportTableCell elem={elem} hours={"19:00-20:00"} date={getTodayDate()}
                                         postReportPerHour={postReportPerHour}  postReports={postReports}/>}
                </td>
            </tr>
            </tbody>
        </Table>
    );
};

export default ReportTable;