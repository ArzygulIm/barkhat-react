import React, {useEffect, useState} from 'react';
import {LINES_API} from '../../config'
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import ReportTable from "../ReportTable/ReportTable";

const ReportPerHour = ({lines, getLines}) => {
    return (
        <div>
            {lines && lines.map((elem, index) =>{
                return(
                    <Accordion key={index}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                            <Typography>Модель: {elem.model}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ReportTable elem={elem} getLines={getLines}/>
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </div>
    );
};

export default ReportPerHour;