import { Typography, Box } from '@mui/material'
import * as style from './style.jsx'
import { IMAGE } from './style.jsx'
import Dog from '../../assets/cute-dog.jpg'
import Australian from '../../assets/cute-australian-dog.jpg'

import { Link} from 'react-router-dom'


export function Header(){
    return(
        <a href='/'>
            <Box
                sx={style.MenuStyle}    
            >
                    <IMAGE
                        src={Dog} 
                        />
                        <Typography
                            variant='h2'
                            color="#f5fbef"
                            fontWeight='bold'
                        >Dog Breed</Typography>

                    <IMAGE
                        src={Australian}
                        />
            </Box>
        </a>
        
    )
}