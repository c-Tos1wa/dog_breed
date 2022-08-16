import { useState } from 'react'

import { useNavigate } from 'react-router-dom';

import { Box, Button, TextField, Typography } from "@mui/material";
import * as Style from './style'
import { api } from '../../api';


export function SignUp(){
    let navigate = useNavigate()

    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const registration = { email }
        setEmail('')
        navigate('/lista-cahorros')

        api.post('/register', registration)
            .then((response) => {
                const TOKEN = response.data.user.token
                sessionStorage.setItem('token', TOKEN)
            })
            .catch(() => {})

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
                    value={ email }
                    onChange={
                        (e) => setEmail(e.target.value)
                    }
                />

                <Button
                    variant='outlined'
                    onClick={handleSubmit}
                >Enviar</Button>
            </Box>


        </>
    )
}