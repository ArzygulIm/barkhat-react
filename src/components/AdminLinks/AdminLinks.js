import React, {useEffect, useState} from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CreateLineForm from "../CreateLineForm/CreateLineForm";
import ReportPerHour from "../ReportPerHour/ReportPerHour";
import {LINES_API} from "../../config";

const AdminLinks = () => {
    const [lines, setLines] = useState([])
    const getLines = () => {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        fetch(LINES_API, {
            method: 'GET',
            headers: headers
        })
            .then(response => response.json())
            .then(json => {
                console.log("getlines work")
                setLines(json)
            })
            .catch(error => console.log('Authorization failed: ' + error.message));
    }

    useEffect(() => {
        getLines()
    }, []);
    return (
        <div>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography>Добавить линию</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <StyledEngineProvider injectFirst>
                        <CreateLineForm lines={lines} setLines={setLines} getLines={getLines}/>
                    </StyledEngineProvider>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography>Часовой отчет</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ReportPerHour lines={lines} setLines={setLines} getLines={getLines}/>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default AdminLinks;