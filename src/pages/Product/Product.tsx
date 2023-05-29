import React, { useContext, useState, useEffect } from 'react'
import { Box, CircularProgress, Card, CardMedia, CardContent, CardActions, Typography } from '@mui/material'
import Meta from '@/components/Meta';
import { useParams } from 'react-router-dom';
import axios, { all } from 'axios';
import AppBar from '../Components/AppBar';
import { Product } from '@/MyContext';

function SelectedProduct() {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const url = 'https://fakestoreapi.com/products'

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = () => {
        axios.get(url)
        .then((response) => {
            const allProducts = response.data;
            setProducts(allProducts);
            setIsLoading(false)
        })
        .catch(error => {
            console.log(`Error: ${error}`);
            setIsLoading(true)
        })
    }
    console.log(products)

    const { id } = useParams();
    if (!isLoading) {
        const filter = products.filter((filtered: Product) => filtered.id === Number(id))
        const filteredProduct = filter.map((object: Product) => {
            const truncatedDesc = object.description.length > 100 ? `${object.description.substring(0, 150)}...` : object.description
            return (
                <Card elevation={0} key={object.id}>
                    <CardMedia 
                        component={'img'}
                        width={'100%'}
                        src={object.image}
                        sx={{aspectRatio: '1/1'}} 
                    />
                    <CardContent sx={{px: 3, py: 2}}>
                         <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
                            <Typography variant='h2' fontFamily={'lato'} color={'#21242b'} fontWeight={700} fontSize={24}>{object.title}</Typography>
                            <Typography fontSize={14} color={'#a9a9a9'} fontWeight={500} variant='body1'>{truncatedDesc}</Typography>
                         </Box>
                    </CardContent>
                </Card>
            )
        })
        console.log(filter)
        
        return (
            <Box>
                <AppBar appBarText={'Product Details'} />
                {filteredProduct}
            </Box>
        )
    }   
    else return (
        <Box sx={{display: 'flex', width: '100%', height: 'calc(100vh - 80px)', justifyContent: 'center', alignItems: 'center',}}>
            <Meta title="Home" />
            <CircularProgress />
        </Box>
    )
}

export default SelectedProduct;
