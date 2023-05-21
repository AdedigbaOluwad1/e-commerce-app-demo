import Meta from '@/components/Meta';
import {styled} from '@mui/material/styles'
import { 
  Container,
  Button,
  Typography,
  Box,
  Stack,
  IconButton,
  InputBase,
  TextField
  } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SearchIcon from '@mui/icons-material/Search';
import 'typeface-manrope'
import { borderColor } from '@mui/system';


const SearchBox = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 10,
    border: '1px solid #d9dcdd',
    backgroundColor: '#f8f9f8',
    height: '38px',
    padding: '5px 35px 5px 15px',
    fontSize: '14px',
    color: '#97a0ae',
    fontFamily: 'Manrope',
    tranition: 'all 5s ease'
  },
  '& .MuiInputBase-input:focus-visible, .MuiInputBase-input:hover': {
    borderColor: theme.palette.primary.main
  }
}))

const Buttons = styled(Button)({
  border: '1px solid',
  borderColor: ''
})


function Welcome() {
  return (
    <>
      <Meta title="Home" />
      <Box display={'flex'} flexDirection={'column'} gap={3} alignItems={'center'} py={3} px={3}>
        <Stack direction={'row'} spacing={1} width={'100%'}>
          <IconButton size='large'>
            <ChevronLeftIcon sx={{ color: 'black'}}/>
          </IconButton>
          <SearchBox endAdornment={<IconButton size='large' sx={{position: 'absolute', right: 5,}}><SearchIcon  /></IconButton>} fullWidth placeholder='Search for a product or cat...' sx={{fontWeight: 500}} />
        </Stack>
          <Stack direction={'row'} gap={4} height={'40px'} width={'100%'}>
            <Buttons variant='outlined' sx={{height: '100%', minWidth: '40px',}}></Buttons>
          </Stack>
      </Box>
    </>
  );
}

export default Welcome;
