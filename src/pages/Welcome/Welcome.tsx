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
  TextField
  } from '@mui/material';
import 'typeface-manrope'
import { borderColor } from '@mui/system';


const SearchBox = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 10,
    backgroundColor: '#f7f8f8',
    height: '38px',
    padding: '5px 35px 5px 15px',
    fontSize: '14px',
    color: '#949dab',
    fontFamily: 'Manrope',
    tranition: 'all 5s ease'
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
      <Box display={'flex'} flexDirection={'column'} gap={3} alignItems={'center'} py={3} px={3}>
        <Stack direction={'row'} alignItems={'center'} spacing={1} width={'100%'}>
          <IconButton size='medium' disableRipple sx={{width: '32px', p: 0}}>
            <FontAwesomeIcon size="1x" color='black' icon={faChevronLeft} />
          </IconButton>
          <SearchBox endAdornment={<IconButton size='medium' disableRipple sx={{position: 'absolute', right: 8,}}><FontAwesomeIcon icon={faMagnifyingGlass} color='#949dab'/></IconButton>} fullWidth placeholder='Search for a product or cat...' sx={{fontWeight: 400}} />
        </Stack>
          <Stack direction={'row'} gap={4} height={'40px'} width={'100%'}>
            <Buttons variant='outlined' sx={{height: '100%', minWidth: '40px',}}></Buttons>
          </Stack>
      </Box>
    </>
  );
}

export default Welcome;
