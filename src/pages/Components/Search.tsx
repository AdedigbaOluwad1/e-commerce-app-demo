import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronLeft, 
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import {styled} from '@mui/material/styles'
import {
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
    height: 52,
    borderRadius: 10,
    background: theme.palette.secondary.light,
    color: '#939aa7',
    "& fieldset": {
      borderColor: theme.palette.secondary.main,
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main
    }
  }
}))


function Search() {
  return (
    <Stack direction={'row'} alignItems={'stretch'} spacing={1} width={'100%'}>
          <IconButton size='small' disableRipple sx={{height: '52px', aspectRatio: '1/1', p: 0, background: '#fff', borderRadius: '10px'}}>
            <FontAwesomeIcon size="1x" color='black' icon={faChevronLeft} />
          </IconButton>
          <SearchBox variant='outlined' InputProps={{
            endAdornment: <InputAdornment position='end'><IconButton disableRipple sx={{p: 0}}><FontAwesomeIcon fontSize={'16px'} icon={faMagnifyingGlass} /></IconButton></InputAdornment>
          }}
           fullWidth placeholder='Search for a product or cate...' sx={{height: '48px', }} />
        </Stack>
  )
}

export default Search;
