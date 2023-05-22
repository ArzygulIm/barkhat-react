import React, {useState} from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import WrongAccessCode from "../WrongAccessCode/WrongAccessCode";

const BossAccess = ({setLogin}) => {
    const [accessCode, setAccessCode] = useState("")
    const [wrongAccessCode, setWrongAccessCode] = useState(false)

    const handleAccessCode = (e) => {
        setAccessCode(e.target.value)
    }

    const submitAccessCode = () => {
        if(accessCode === "barkhat1234" || accessCode === "бархат1234"){
            localStorage.setItem('loginBoss',JSON.stringify({name: "Нуржан"}))
            setLogin(true)
        }else{
            setWrongAccessCode(true)
        }
    }
    return (
        <div>
            <Box component="form" sx={{'& > :not(style)': {m: 1, width: '25ch'}}} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Код доступа" variant="outlined" onChange={handleAccessCode}/>
                <Button variant="contained" color="success" onClick={submitAccessCode}>Войти</Button>
            </Box>

            {wrongAccessCode === true? <WrongAccessCode/> : null}
        </div>
    );
};

export default BossAccess;