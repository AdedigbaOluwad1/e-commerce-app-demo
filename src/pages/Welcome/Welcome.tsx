import Meta from '@/components/Meta';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {styled} from '@mui/material/styles'
import { 
  Container,
  Button,
  Typography,
  Box,
  Stack,
  IconButton,
  InputBase,
  TextField,
  Paper
  } from '@mui/material';
import 'typeface-manrope';
import 'typeface-roboto';
import 'typeface-open-sans';
import 'typeface-nunito'


const SearchBox = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 10,
    backgroundColor: '#f8f9f8',
    height: '48px',
    padding: '2px 45px 2px 15px',
    fontSize: '20px',
    color: '#949dab',
    fontFamily: 'Nunito',
    tranition: 'all 5s ease',
    fontWeight: 500
  },
}))

const Buttons = styled(Button)({
  border: '1px solid',
  borderColor: ''
})


function Welcome() {
  return (
    <>
      <Meta title="Home" />
      <Box display={'flex'} flexDirection={'column'} gap={3} sx={{background: '#fcfcfc'}} alignItems={'center'} py={3} px={3}>
        <Stack direction={'row'} alignItems={'center'} spacing={1} width={'100%'}>
          <IconButton size='medium' disableRipple sx={{width: '52px', height: '52px', p: 0, background: '#fff', borderRadius: '10px'}}>
            <FontAwesomeIcon size="1x" color='black' icon={faChevronLeft} />
          </IconButton>
          <SearchBox endAdornment={<IconButton size='medium' disableRipple sx={{position: 'absolute', right: 8,}}><FontAwesomeIcon icon={faMagnifyingGlass} color='#949dab'/></IconButton>} fullWidth placeholder='Search for a product' />
        </Stack>
          <Stack direction={'row'} gap={4} height={'40px'} width={'100%'}>
            <Buttons variant='outlined' sx={{height: '100%', minWidth: '40px',}}></Buttons>
          </Stack>
      </Box>
    </>
  );
}

export default Welcome;
