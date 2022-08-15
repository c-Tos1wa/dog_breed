import * as styled from './style'

import { Box, Card, CardMedia } from '@mui/material'


export function DogCard(){
    return(
        <Box
            sx={styled.ListOrganized}
        >
            <Card
                sx={styled.CardStyle}
            >
                <CardMedia
                    component="img"
                    image="http://s2.glbimg.com/wB2k5I1ty4iVdwzurRl40rcoSqo=/e.glbimg.com/og/ed/f/original/2017/07/20/beach-1790049_960_720.jpg"
                    alt=""
                >
                </CardMedia>

            </Card>
            
        </Box>
    )
}