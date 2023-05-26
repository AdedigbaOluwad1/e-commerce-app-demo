import Meta from '@/components/Meta';
import Categories from '../Components/Categories';
import Search from '../Components/Search';
import HotSales from '../Components/HotSales';
import RecentlyViewed from '../Components/Recent';
import { Box } from '@mui/material';
import 'typeface-manrope';
import 'typeface-roboto';
import 'typeface-open-sans';
import 'typeface-nunito';
import 'typeface-dm-sans'
function Welcome() {
  return (
    <>
      <Meta title="Home" />
      <Box display={'flex'} flexDirection={'column'} gap={3} sx={{background: '#fcfcfc'}} alignItems={'center'} py={3} px={3}>
        <Search />
        <Categories />
        <HotSales />
        <RecentlyViewed />
      </Box>
    </>
  );
}

export default Welcome;
