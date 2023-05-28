import { useState, useEffect } from 'react'
import { MyContext, Product } from '@/MyContext';
import Meta from '@/components/Meta';
import Categories from '../Components/Categories';
import Search from '../Components/Search';
import HotSales from '../Components/HotSales';
import RecentlyViewed from '../Components/Recent';
import axios from 'axios';
import AllProducts from '../Components/AllProducts';
import { Box, Typography, CircularProgress } from '@mui/material';
import 'typeface-manrope';
import 'typeface-roboto';
import 'typeface-open-sans';
import 'typeface-nunito';
import 'typeface-dm-sans'



function Welcome() {
  //state to store products
  const [products, setProducts] = useState<Product[]>([])
  const [loading, isLoading] = useState(true)

  const url = 'https://fakestoreapi.com/';

  useEffect(() => {
      fetchAllProducts();
    }, []);

  const fetchAllProducts = () => {
    axios.get(`${url}products`)
    .then((respsonse) => {
      const allProducts = respsonse.data;
      setProducts(allProducts);
      isLoading(false)
    })
    .catch(error => { 
    console.error(`Error: ${error}`); 
    isLoading(false)});
  }
  
  console.log(products)
  
  if (loading) {
    return(
      <Box sx={{display: 'flex', width: '100%', height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
        <CircularProgress />
      </Box>
      )
    
  } else {
    return (
      <>
        <Meta title="Home" />
        <MyContext.Provider value={{ products, setProducts}} >
          <Box display={'flex'} flexDirection={'column'} gap={3} sx={{background: '#fafafa'}} alignItems={'center'} py={3} px={3}>
            <Search />
            <Categories />
            <HotSales />
            <RecentlyViewed />
            <AllProducts />
          </Box>
        </MyContext.Provider>
        
      </>
    );
  }
}

export default Welcome;
