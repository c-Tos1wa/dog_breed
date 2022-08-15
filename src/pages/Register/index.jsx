import { useState } from 'react'

import { api } from '../../api';
import { useNavigate } from 'react-router-dom';

import { Box, Button, TextField, Typography } from "@mui/material";
import * as Style from './style'


export function SignUp(){
    let navigate = useNavigate()
    const [email, setEmail] = useState('')

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const registration = { email }
        setEmail('')
        navigate('/cachorros')
        
        api.post('/register', registration)
        .then((res) => {
            const token = res.data.user.token
            sessionStorage.setItem('token', token)
        })
        .catch((err) => {
            console.err(err)
        })  
    }

    return(
        <>

            <Box
                sx={Style.FormStyled}   
            >
                <Typography
                    variant='h5'
                >
                    Cadastre-se e veja fotos de nossos cães
                </Typography>
                <TextField 
                    required
                    padding='1.5em'
                    label="Email"
                    variant="outlined"
                    placeholder='Escreva seu e-mail aqui'
                    value={email}
                    onChange={handleChange}
                />

                <Button
                    variant='outlined'
                    onClick={handleSubmit}
                >Enviar</Button>
            </Box>


        </>
    )
}