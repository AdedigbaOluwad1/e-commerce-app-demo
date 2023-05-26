import React from 'react'
import { Stack, Card, CardMedia, CardContent, Typography, Box } from '@mui/material'
import 'typeface-nunito'
import 'typeface-open-sans'
import 'typeface-dm-sans'
import 'typeface-manrope'
import macbook from '@/imgs/photo-1517336714731-489689fd1ca8.jpg'

function HotSales() {
  return (
    <Box width={'100%'} gap={3.5} sx={{marginTop: 2, fontFamily: 'Nunito', display: 'flex', flexDirection: 'column'}}>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography variant='h4' sx={{fontWeight: 700, fontSize: 17, color: '#1b1b1b', fontFamily: 'Manrope'}}>Hot Sales</Typography>
            <Typography variant='subtitle2' sx={{color: '#797b84', fontFamily: 'Manrope', fontWeight: 400, fontSize: 13}}>See all</Typography>
        </Stack>
        <Stack direction={'row'} className='scrollBarHidden' gap={3} width={'100%'} sx={{overflowX: 'auto'}}>

            <Card elevation={0} sx={{width: '43%', minWidth: '170px', background: 'transparent'}}>
                <CardMedia 
                component="img"
                src={macbook}
                sx={{width: '100%',
                aspectRatio: '1/1',
                borderRadius: '20px'
                }}

                />
                <CardContent sx={{marginTop: 1.5, width: '100%', p: 0}}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography fontWeight={600} fontSize={14} color={'#2b3237'}>Macbook Air M1</Typography>
                        <Typography fontSize={14} color={'#2b3237'} fontWeight={500}>$ 150</Typography>
                    </Stack>
                    <Typography fontSize={12} color={'#a9a9a9'} fontWeight={500} variant='body1'>The intuitive and intelligent WH-1000XM4 headphones..</Typography>
                </CardContent>
            </Card>

            <Card elevation={0} sx={{width: '43%', minWidth: '170px', background: 'transparent'}}>
                <CardMedia 
                component="img"
                src={macbook}
                sx={{width: '100%',
                aspectRatio: '1/1',
                borderRadius: '20px'
                }}

                />
                <CardContent sx={{marginTop: 1.5, width: '100%', p: 0}}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography fontWeight={600} fontSize={14} color={'#2b3237'}>Macbook Air M1</Typography>
                        <Typography fontSize={14} color={'#2b3237'} fontWeight={500}>$ 150</Typography>
                    </Stack>
                    <Typography fontSize={12} color={'#a9a9a9'} fontWeight={500} variant='body1'>The intuitive and intelligent WH-1000XM4 headphones..</Typography>
                </CardContent>
            </Card>

            <Card elevation={0} sx={{width: '43%', minWidth: '170px', background: 'transparent'}}>
                <CardMedia 
                component="img"
                src={macbook}
                sx={{width: '100%',
                aspectRatio: '1/1',
                borderRadius: '20px'
                }}

                />
                <CardContent sx={{marginTop: 1.5, width: '100%', p: 0}}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography fontWeight={600} fontSize={14} color={'#2b3237'}>Macbook Air M1</Typography>
                        <Typography fontSize={14} color={'#2b3237'} fontWeight={500}>$ 150</Typography>
                    </Stack>
                    <Typography fontSize={12} color={'#a9a9a9'} fontWeight={500} variant='body1'>The intuitive and intelligent WH-1000XM4 headphones..</Typography>
                </CardContent>
            </Card>

            <Card elevation={0} sx={{width: '43%', minWidth: '170px', background: 'transparent'}}>
                <CardMedia 
                component="img"
                src={macbook}
                sx={{width: '100%',
                aspectRatio: '1/1',
                borderRadius: '20px'
                }}

                />
                <CardContent sx={{marginTop: 1.5, width: '100%', p: 0}}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography fontWeight={700} fontSize={14} color={'#2b3237'}>Macbook Air M1</Typography>
                        <Typography fontSize={14} color={'#2b3237'} fontWeight={500}>$ 150</Typography>
                    </Stack>
                    <Typography fontSize={12} color={'#a9a9a9'} fontWeight={500} variant='body1'>The intuitive and intelligent WH-1000XM4 headphones..</Typography>
                </CardContent>
            </Card>
        </Stack>   
    </Box>
    
  )
}

export default HotSales
