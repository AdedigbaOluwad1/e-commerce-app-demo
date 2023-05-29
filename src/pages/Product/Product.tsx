import React, { useContext, useState, useEffect } from 'react'
import { Box, CircularProgress } from '@mui/material'
import Meta from '@/components/Meta';
import { useParams } from 'react-router-dom';
import axios, { all } from 'axios';
import AppBar from '../Components/AppBar';

function Product() {
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
        const filter = products.filter((filtered: any) => filtered.id === Number(id))
        console.log(filter)

        return (
            <Box>
                <AppBar appBarText={'Product Details'} />
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

export default Product
