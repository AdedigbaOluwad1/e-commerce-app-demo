import React from 'react'
import { Stack, Card, CardMedia, CardContent, Typography, Box, IconButton } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import 'typeface-nunito'
import 'typeface-open-sans'
import 'typeface-dm-sans'
import 'typeface-manrope'
import macbook from '@/imgs/photo-1517336714731-489689fd1ca8.jpg'

function RecentlyViewed() {
  return (
    <Box width={'100%'} gap={3.5} sx={{marginTop: 2, fontFamily: 'Nunito', display: 'flex', flexDirection: 'column'}}>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography variant='h4' sx={{fontWeight: 700, fontSize: 17, color: '#1b1b1b', fontFamily: 'Manrope'}}>Recently Viewed</Typography>
            <Typography variant='subtitle2' sx={{color: '#797b84', fontFamily: 'Manrope', fontWeight: 400, fontSize: 13}}>See all</Typography>
        </Stack>
        <Stack direction={'row'} className='scrollBarHidden' gap={3} width={'100%'} sx={{overflowX: 'auto'}}>

            <Card elevation={0} sx={{width: '50%', minWidth: '200px', background: '#fff', p: 1.5, borderRadius: '20px'}}>
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
                        <Typography fontWeight={600} fontSize={17} color={'#2b3237'}>Macbook Air M1</Typography>
                        <IconButton color='secondary' sx={{borderRadius: '50%', border: '1px solid', p: '5px'}}><FontAwesomeIcon fontSize={'10px'} icon={faHeart} /></IconButton>
                    </Stack>
                    <Typography fontSize={11} color={'#a9a9a9'} fontWeight={500} variant='body1'>The intuitive and intelligent WH-1000XM4 headphones..</Typography>
                </CardContent>
            </Card>

            <Card elevation={0} sx={{width: '50%', minWidth: '200px', background: '#fff', p: 1.5, borderRadius: '20px'}}>
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
                        <Typography fontWeight={600} fontSize={17} color={'#2b3237'}>Macbook Air M1</Typography>
                        <IconButton color='secondary' sx={{borderRadius: '50%', border: '1px solid', p: '5px'}}><FontAwesomeIcon fontSize={'10px'} icon={faHeart} /></IconButton>
                    </Stack>
                    <Typography fontSize={11} color={'#a9a9a9'} fontWeight={500} variant='body1'>The intuitive and intelligent WH-1000XM4 headphones..</Typography>
                </CardContent>
            </Card>

            <Card elevation={0} sx={{width: '50%', minWidth: '200px', background: '#fff', p: 1.5, borderRadius: '20px'}}>
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
                        <Typography fontWeight={600} fontSize={17} color={'#2b3237'}>Macbook Air M1</Typography>
                        <IconButton color='secondary' sx={{borderRadius: '50%', border: '1px solid', p: '5px'}}><FontAwesomeIcon fontSize={'10px'} icon={faHeart} /></IconButton>
                    </Stack>
                    <Typography fontSize={11} color={'#a9a9a9'} fontWeight={500} variant='body1'>The intuitive and intelligent WH-1000XM4 headphones..</Typography>
                </CardContent>
            </Card>

            <Card elevation={0} sx={{width: '50%', minWidth: '200px', background: '#fff', p: 1.5, borderRadius: '20px'}}>
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
                        <Typography fontWeight={600} fontSize={17} color={'#2b3237'}>Macbook Air M1</Typography>
                        <IconButton color='secondary' sx={{borderRadius: '50%', border: '1px solid', p: '5px'}}><FontAwesomeIcon fontSize={'10px'} icon={faHeart} /></IconButton>
                    </Stack>
                    <Typography fontSize={11} color={'#a9a9a9'} fontWeight={500} variant='body1'>The intuitive and intelligent WH-1000XM4 headphones..</Typography>
                </CardContent>
            </Card>
        </Stack>   
    </Box>
    
  )
}

export default RecentlyViewed;
