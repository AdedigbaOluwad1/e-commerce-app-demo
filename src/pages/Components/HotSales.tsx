import React, { useContext } from 'react'
import { MyContext } from '@/MyContext'
import { Stack, Card, CardMedia, CardContent, Typography, Box } from '@mui/material'
import 'typeface-nunito'
import 'typeface-open-sans'
import 'typeface-dm-sans'
import 'typeface-manrope'

function HotSales() {
    const { products, setProducts } = useContext(MyContext)
    const titleLength = 12;
    const descLength = 45;
    const filterProducts = products.filter((newProduct: any) => newProduct.id <= 5);
    const HotSalesProduct = filterProducts.map((eachProduct: any) => {
        
        const truncatedTitleText = eachProduct.title.length > titleLength ? `${eachProduct.title.substring(0, titleLength)}...` : eachProduct.title;
        const truncatedDescText = eachProduct.description.length > descLength ? `${eachProduct.description.substring(0, descLength)}...` : eachProduct.title;
        return(
            <Card elevation={0} key={eachProduct.id} sx={{width: '43%', minWidth: '170px', background: 'transparent'}}>
                <CardMedia 
                component="img"
                src={eachProduct.image}
                sx={{width: '100%',
                aspectRatio: '1/1',
                borderRadius: '20px'
                }}

                />
                <CardContent sx={{marginTop: 1.5, width: '100%', p: 0}}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography fontWeight={600} fontSize={14} color={'#2b3237'}>{truncatedTitleText}</Typography>
                        <Typography fontSize={14} color={'#2b3237'} fontWeight={500}>{`$ ${eachProduct.price}`}</Typography>
                    </Stack>
                    <Typography fontSize={12} color={'#a9a9a9'} fontWeight={500} variant='body1'>{truncatedDescText}</Typography>
                </CardContent>
            </Card>
        )
    })
  return (
    <Box width={'100%'} gap={3.5} sx={{marginTop: 2, fontFamily: 'Nunito', display: 'flex', flexDirection: 'column'}}>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography variant='h4' sx={{fontWeight: 700, fontSize: 17, color: '#1b1b1b', fontFamily: 'Manrope'}}>Hot Sales</Typography>
            <Typography variant='subtitle2' sx={{color: '#797b84', fontFamily: 'Manrope', fontWeight: 400, fontSize: 13}}>See all</Typography>
        </Stack>
        <Stack direction={'row'} className='scrollBarHidden' gap={3} width={'100%'} sx={{overflowX: 'auto'}}>

        {HotSalesProduct}

        </Stack>   
    </Box>
    
  )
}

export default HotSales;
