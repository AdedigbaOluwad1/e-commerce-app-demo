import React, { 
    useContext, 
    useState, 
    useEffect 
} from 'react'

import {
    Box, 
    CircularProgress, 
    Card, 
    CardMedia, 
    CardContent, 
    CardActions, 
    Typography,
    Stack,
    Button,
    IconButton
} from '@mui/material'
import Meta from '@/components/Meta';
import { useParams } from 'react-router-dom';
import axios, { all } from 'axios';
import AppBar from '../Components/AppBar';
import { Product } from '@/MyContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { AppBarContext } from '@/App';

function SelectedProduct() {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const url = 'https://fakestoreapi.com/products'
    const {showNav, setShowNav} = useContext(AppBarContext);
    useEffect(() => {
        getProducts();
        setShowNav(false);
    }, [setShowNav])

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
            const truncatedDesc = object.description.length > 100 ? `${object.description.substring(0, 150)}...` : `${object.description}.`
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
                            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                <Button disableRipple variant='contained' sx={{width: 'fit-content', boxShadow: 'none', color: 'white', textTransform: 'unset', fontFamily: 'lato', py: 0, height: 'fit-content', fontWeight: 500, '&:hover': {
                                    boxShadow: 'unset',
                                }}}>Free Shipping</Button>
                                <IconButton>
                                    <FontAwesomeIcon fontSize={'16px'} icon={faHeart} color='#cbd1d8' />
                                </IconButton>
                            </Stack>
                            <Typography variant='h2' fontFamily={'lato'} color={'#21242b'} fontWeight={700} fontSize={24}>{object.title}</Typography>
                            <Typography fontSize={14} color={'#a9a9a9'} fontWeight={500} variant='body1'>{truncatedDesc}</Typography>
                            <Typography fontSize={20} fontWeight={600} color={'#31363b'}>${object.price}</Typography> 
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
        <Box sx={{display: 'flex', width: '100%', height: 'calc(100vh)', justifyContent: 'center', alignItems: 'center'}}>
            <Meta title="Home" />
            <CircularProgress />
        </Box>
    )
}

export default SelectedProduct;
