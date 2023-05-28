import React, { useContext } from 'react'
import { MyContext } from '@/MyContext'
import { 
    Stack, 
    Card, 
    CardMedia, 
    CardContent,
    CardActions, 
    Typography, 
    Box, 
    IconButton
} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import 'typeface-nunito'
import 'typeface-open-sans'
import 'typeface-dm-sans'
import 'typeface-manrope'
import macbook from '@/imgs/photo-1517336714731-489689fd1ca8.jpg'

function AllProducts() {
    const {products, setProducts} = useContext(MyContext);
  return (
    <Box width={'100%'} gap={3.5} sx={{marginTop: 2, fontFamily: 'Nunito', display: 'flex', flexDirection: 'column'}}>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography variant='h4' sx={{fontWeight: 700, fontSize: 17, color: '#1b1b1b', fontFamily: 'Manrope'}}>All Products</Typography>
            <Typography variant='subtitle2' sx={{color: '#797b84', fontFamily: 'Manrope', fontWeight: 400, fontSize: 13}}>See all</Typography>
        </Stack>
        <Stack direction={'row'} className='scrollBarHidden' gap={3} width={'100%'} sx={{overflowX: 'auto', flexWrap: 'wrap'}}>

            {products.map((eachProduct) => {
                const titleLength = 25;
                const descLength = 80;

                const formatTitle = eachProduct.title.length > titleLength ? `${eachProduct.title.substring(0, titleLength)}...` : eachProduct.title;
                const formatDesc = eachProduct.description.length > descLength ? `${eachProduct.description.substring(0, descLength)}...` : eachProduct.description;

                return(
                    <Card key={eachProduct.id} elevation={0} sx={{width: '100%', background: '#fff', pb: 2, borderRadius: '20px'}}>
                        <CardMedia 
                        component="img"
                        src={eachProduct.image}
                        sx={{width: '100%',
                        aspectRatio: '1/0.6',
                        borderRadius: '20px 20px 0 0'
                        }}

                        />
                        <CardContent sx={{marginTop: 1.5, width: '100%', pt: 1, px:2}}>
                            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                <Typography fontWeight={600} fontSize={17} color={'#2b3237'}>{formatTitle}</Typography>
                                <IconButton color='secondary' sx={{borderRadius: '50%', border: '1px solid', p: '5px'}}><FontAwesomeIcon fontSize={'10px'} icon={faHeart} /></IconButton>
                            </Stack>
                            <Typography fontSize={11} color={'#a9a9a9'} fontWeight={500} variant='body1'>{formatDesc}</Typography>
                        </CardContent>
                
                        <CardActions sx={{width: '100%', px: 2}}>
                            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
                                <Typography variant='h2' fontSize={24} fontWeight={700}>$128</Typography>
                                <IconButton color='primary' sx={{fontSize: '24px', p: 0}}><FontAwesomeIcon icon={faPlusSquare} /></IconButton>
                            </Stack>
                            
                        </CardActions>
                    </Card>
                )
            })}
        </Stack>   
    </Box>
    
  )
}

export default AllProducts;
