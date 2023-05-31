import React, { 
    useContext, 
    useState, 
    useEffect 
} from 'react'
import { styled } from '@mui/material/styles';
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
    IconButton,
    TextField,
    InputAdornment,
    AppBar,
    Toolbar

} from '@mui/material'
import Meta from '@/components/Meta';
import { useParams } from 'react-router-dom';
import axios, { all } from 'axios';
import Header from '../Components/AppBar';
import { Product } from '@/MyContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHeart, 
    faCheckCircle,
    faPlus,
    faMinus 
} from '@fortawesome/free-solid-svg-icons';
import { AppBarContext } from '@/App';
import 'typeface-lato'
import { height } from '@mui/system';

  const TextBox = styled(TextField)(({theme}) => ({
    '& .MuiOutlinedInput-root': {
        height: '50px',
        fontFamily: 'lato',
        color: 'black',
        '& fieldset': {
            border: `1px solid ${theme.palette.secondary.main}`,
            borderRadius: 8,
            fontSize: 12,
            fontWeight: 'bold',
        },
        '&:hover fieldset': {
            borderColor: theme.palette.primary.main
        },        
    }
  }))

function SelectedProduct() {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [productQuantity, setProductQuantity] = useState(1)
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

    function Add() {
        setProductQuantity(productQuantity + 1);
    }
    function Subtract() {
        setProductQuantity(productQuantity - 1);
    }

    const { id } = useParams();
    if (!isLoading) {
        const filter = products.filter((filtered: Product) => filtered.id === Number(id))
        const filteredProduct = filter.map((object: Product) => {
            const truncatedDesc = object.description.length > 100 ? `${object.description.substring(0, 150)}...` : `${object.description}.`
            return (
                <Card elevation={0} key={object.id} sx={{marginBottom: '150px'}}>
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
                    <CardActions sx={{px: 3}}>
                        <TextBox disabled value={'AXDSFR'} fullWidth sx={{
                            fontFamily: 'manrope',
                        }} InputProps={{
                            endAdornment: <InputAdornment position='end' sx={{gap: 0.5, color: '#38c6a5'}}>
                                <Typography fontSize={12} fontFamily={'lato'} fontWeight={500}>
                                    Available
                                </Typography>
                                <FontAwesomeIcon icon={faCheckCircle} />
                            </InputAdornment>
                        }}
                        />
                    </CardActions>
                </Card> 
                
            )
        })
        console.log(filter)

        
        return (
            <Box>
                <Header appBarText={'Product Details'} />
                {filteredProduct}
                <AppBar position='fixed' sx={{
                    width: '100%',
                    bottom: 0,
                    top: 'unset',
                    background: 'white'
                }}>
                    <Toolbar sx={{
                        height: 75,
                        px: 3,
                        py: 1
                    }}>
                        <Stack direction={'row'} width={'100%'} p={0}>
                            <Stack direction={'row'} width={'50%'} alignItems={'center'} gap={1}>
                                <IconButton onClick={Subtract} disabled={productQuantity < 2} sx={{
                                    borderRadius: '5px',
                                    border: '1px solid', 
                                    p: 0.6,
                                    height: 'fit-content',
                                    color: '#38c6a5',
                                    '&:hover': {
                                        background: '#38c6a5',
                                        color: 'white',
                                    },
                                    '&:active': {
                                        background: '#38c6a5',
                                        color: 'white',
                                    },
                                    '&:disabled': {
                                        borderColor: '#38c6a5',
                                        color: '#38c6a5'
                                    }
                                }}>
                                    <FontAwesomeIcon fontSize={14} icon={faMinus} />
                                </IconButton>
                                <Typography sx={{
                                    width: '24px',
                                    aspectRatio: '1/1',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: 14
                                }}>
                                    {productQuantity}
                                </Typography>
                                <IconButton onClick={Add} sx={{
                                    borderRadius: '5px',
                                    border: '1px solid', 
                                    p: 0.6,
                                    height: 'fit-content',
                                    color: '#38c6a5',
                                    '&:hover': {
                                        background: '#38c6a5',
                                        color: 'white',
                                    },
                                    '&:active': {
                                        background: '#38c6a5',
                                        color: 'white',
                                    }
                                }}>
                                    <FontAwesomeIcon fontSize={14} icon={faPlus} />
                                </IconButton>
                            </Stack>
                            <Button variant='contained' disableElevation sx={{
                                borderRadius: '10px',
                                height: 50,
                                width: '50%',
                                textTransform: 'none',
                                color: 'white',
                                fontFamily: 'lato',
                                fontWeight: 500,
                                fontSize: 14
                            }}>
                                Continue
                            </Button>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </Box>
        )
    }   
    else return (
        <Box sx={{display: 'flex', width: '100%', height: 'calc(100vh-120px)', justifyContent: 'center', alignItems: 'center'}}>
            <Meta title="Home" />
            <CircularProgress />
        </Box>
    )
}

export default SelectedProduct;
