import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import WrongAccessCode from "../WrongAccessCode/WrongAccessCode";

const AccessCode = ({setLogin}) => {
    const [name, setName] = useState("")
    const [accessCode, setAccessCode] = useState("")
    const [wrongAccessCode, setWrongAccessCode] = useState(false)

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleAccessCode = (e) => {
        setAccessCode(e.target.value)
    }

    const submitAccessCode = () => {
        if(accessCode === "barkhat123" || accessCode === "бархат123"){
            localStorage.setItem('loginAccess',JSON.stringify({name}))
            setAccessCode(true)
        }else{
            setWrongAccessCode(true)
        }
    }
    return (
        <div>
            <Box component="form" sx={{'& > :not(style)': {m: 1, width: '25ch'}}} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Имя" variant="outlined" onChange={handleName}/>
                <TextField id="outlined-basic" label="Код доступа" variant="outlined" onChange={handleAccessCode}/>
                <Button variant="contained" color="success" onClick={submitAccessCode}>Войти</Button>
            </Box>

            {wrongAccessCode === true? <WrongAccessCode/> : null}
        </div>
    );
};

export default AccessCode;