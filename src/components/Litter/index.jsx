import { useState, useEffect } from 'react'
import { api } from '../../api'

import Dog from '../../assets/cute-dog.jpg'
import { Box, Card, CardMedia } from '@mui/material'
import * as styled from './style'


export function DogCard(){
    // const [photos, setPhotos] = useState([])
    // const [breed, setBreed] = useState('chihuahua')
    // const [loggedIn, setLoggedIn] = useState(false)

    // useEffect(() => {
    //     const token = localStorage.token
    //     console.log(token)

    //     if(!token){
    //         setLoggedIn(false)
    //     }

    //     const auth = {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     }

    //     api.get('/list', auth)
    //         .then((res) => {
    //             setLoggedIn(true)
    //             setPhotos(res.data.list)
    //         })
    // }, [loggedIn])

    return(
        <Box
            sx={styled.ListOrganized}
        >
            <Card
                sx={styled.CardStyle}
            >
                <CardMedia
                    component="img"
                    image={Dog}
                    alt="Fotos de cachorros"
                >
                </CardMedia>

            </Card>
            
        </Box>
    )
}