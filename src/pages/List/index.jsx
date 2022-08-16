import { useState } from 'react'

import { Typography } from '@mui/material'

import { DogCard } from '../../components/Litter'

export function Home(){
    const [dogs, setDogs] = useState([])

    return(
        <>
        <DogCard />
        <a href='/'>
            <Typography
                variant='subtitle'
                marginLeft='0.5em'
            >Voltar</Typography>
            </a>
        </>
    )
}