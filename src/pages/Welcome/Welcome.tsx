import Meta from '@/components/Meta';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {styled} from '@mui/material/styles'
import { 
  Button,
  Typography,
  Box,
  Stack,
  IconButton,
  TextField,
  InputAdornment
  } from '@mui/material';
import 'typeface-manrope';
import 'typeface-roboto';
import 'typeface-open-sans';
import 'typeface-nunito';
import 'typeface-dm-sans'

const SearchBox = styled(TextField)(({ theme }) => ({
  "& label.Mui-focused": {
    color: "green"
  },
  "& .MuiOutlinedInput-root": {
    fontFamily: 'Nunito',
    border: 'none',
    fontSize: 16,
    height: 48,
    "& fieldset": {
      borderColor: theme.palette.neutral.main,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main
    }
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
      <Box display={'flex'} flexDirection={'column'} gap={3} sx={{background: '#fcfcfc'}} alignItems={'center'} py={3} px={3}>
        <Stack direction={'row'} alignItems={'center'} spacing={1} width={'100%'}>
          <IconButton size='small' disableRipple sx={{width: '35px', height: '48px', p: 0, background: '#fff', borderRadius: '10px'}}>
            <FontAwesomeIcon size="1x" color='black' icon={faChevronLeft} />
          </IconButton>
          <SearchBox variant='outlined' InputProps={{
            endAdornment: <InputAdornment position='end'><IconButton disableRipple sx={{p: 0}}><FontAwesomeIcon icon={faMagnifyingGlass} /></IconButton></InputAdornment>
          }}
           fullWidth placeholder='Search for a product or cate...' sx={{height: '48px', }} />
        </Stack>
          <Stack direction={'row'} gap={4} height={'40px'} width={'100%'}>
            <Buttons variant='outlined' sx={{height: '100%', minWidth: '40px',}}></Buttons>
          </Stack>
      </Box>
    </>
  );
}

export default Welcome;
