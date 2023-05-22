import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DateField} from '@mui/x-date-pickers/DateField';
import "./style.css"
import {LINES_API} from "../../config";

const CreateLineForm = ({lines, setLines, getLines}) => {
    const getTodayDate = () => {
        const d = new Date()
        return (`${d.getFullYear()}.${Math.floor((d.getMonth() + 1) / 10)}${(d.getMonth() + 1) % 10}.${Math.floor(d.getDate() / 10)}${d.getDate() % 10}`)
    }
    const getTodayDateForState = () => {
        const d = new Date()
        return (`${Math.floor(d.getDate() / 10)}${d.getDate() % 10}.${Math.floor((d.getMonth() + 1) / 10)}${(d.getMonth() + 1) % 10}.${d.getFullYear()}`)
    }
    const [startDayValue, setStartDayValue] = React.useState(dayjs(getTodayDate()));
    const [deadlineValue, setDeadlineValue] = React.useState(dayjs(getTodayDate()));

    const [model, setModel] = useState("")
    const [quantity, setQuantity] = useState("")
    const [workers, setWorkers] = useState("")
    const [startDate, setStartDate] = useState(getTodayDateForState())
    const [deadline, setDeadline] = useState(getTodayDateForState())

    const postLine = (data) => {
        if (data.model !== "" && data.quantity !== 0 && data.workers !== 0) {
            let headers = new Headers();

            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json')

            fetch(LINES_API, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(json => {
                    console.log(json)
                    getLines()
                })
                .catch(error => console.log(error.message));


        }
        setModel("")
        setQuantity("")
        setWorkers("")
    }
    return (
        <Box component="form" sx={{'& > :not(style)': {m: 1, width: '25ch'}}} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Модель" variant="outlined"
                       onChange={(event) => setModel(event.target.value)} value={model}/>
            <TextField id="outlined-number" label="Количество заказа" type="number"
                       onChange={(event) => setQuantity(event.target.value)} value={quantity}/>
            <TextField id="outlined-number" label="Количество людей" type="number"
                       onChange={(event) => setWorkers(event.target.value)} value={workers}/>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateField', 'DateField']}>
                    <DateField
                        label="Дата начало"
                        value={startDayValue}
                        onChange={(newValue) => {
                            setStartDayValue(newValue)
                            setStartDate(`${Math.floor(newValue.$D / 10)}${newValue.$D % 10}.${Math.floor((newValue.$M + 1) / 10)}${(newValue.$M + 1) % 10}.${newValue.$y}`)
                        }}
                        format="DD.MM.YYYY"
                    />
                    <DateField
                        label="Дата конец"
                        value={deadlineValue}
                        onChange={(newValue) => {
                            setDeadlineValue(newValue)
                            setDeadline(`${Math.floor(newValue.$D / 10)}${newValue.$D % 10}.${Math.floor((newValue.$M + 1) / 10)}${(newValue.$M + 1) % 10}.${newValue.$y}`)
                        }}
                        format="DD.MM.YYYY"
                    />
                </DemoContainer>
            </LocalizationProvider>
            <Button variant="contained" color="success" onClick={() => {
                postLine({model, quantity, workers, startDate, deadline})
            }}>Запускать линию</Button>
        </Box>
    );
};

export default CreateLineForm;