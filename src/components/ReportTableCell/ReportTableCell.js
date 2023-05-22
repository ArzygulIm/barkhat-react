import React, {useState} from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./style.css"

const ReportTableCell = ({hours, date, postReportPerHour, elem,  postReports}) => {
    const [workers, setWorkers] = useState(elem.workers)
    const [quantity, setQuantity] = useState(0)
    const [description, setDescription] = useState("")
    return (
        <div className={"table-cell"} style={{display:"flex", alignItems:"center", gap:"20px"}}>
            <TextField id="outlined-number" label="Количество продукта" type="number"
                       onChange={(e) => setQuantity(+e.target.value)}/>
            <TextField id="outlined-number" label="Количество людей" type="number"
                       onChange={(e) => setWorkers(+e.target.value)}/>
            <TextField id="outlined-basic" label="Примечание" variant="outlined"
                       onChange={(e) => setDescription(e.target.value)}/>
            <Button variant="contained" color="success" onClick={() => {
                postReportPerHour({reportPerHour: {date, hours, workers, quantity,adminName: JSON.parse(localStorage.getItem('loginAccess')).name, description}})
                postReports()
            }}>Отправить</Button>
        </div>
    );
};

export default ReportTableCell;