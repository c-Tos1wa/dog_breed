import { useState } from 'react'

import { DogCard } from '../../components/Litter'

export function Home(){
    const [dogs, setDogs] = useState([])

    return(
        <>
        <DogCard />
            {/* {
                dogs.map((photos) => (
                ))
            } */}
        </>
    )
}