import React from 'react'
import pink from '@/imgs/pink-headphones-wireless-digital-device_53876-96804.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSliders
} from '@fortawesome/free-solid-svg-icons';
import {styled} from '@mui/material/styles'
import { 
  Button,
  Typography,
  Stack,
  } from '@mui/material';
import 'typeface-manrope';
import 'typeface-roboto';
import 'typeface-open-sans';
import 'typeface-nunito';
import 'typeface-dm-sans'

const Buttons = styled(Button)(({theme}) => ({
  border: '1px solid',
  borderColor: theme.palette.secondary.main,
  height: '100%', 
  minWidth: '40px',
  borderRadius: 10,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10,
  flexShrink: 0,
  padding: '5px 10px',
  '&:hover': {
    borderColor: theme.palette.secondary.main
  }
}))

const ButtonText = styled(Typography)(({theme}) => ({
  fontSize: 14, 
  color: '#242829', 
  textTransform: 'none', 
  fontWeight: 700, 
  fontFamily: 'Roboto'
}))

function Categories() {
  return (
    <Stack direction={'row'} className='scrollBarHidden' overflow={'auto'} gap={2} minHeight={'52px'} width={'100%'} sx={{overflowY: 'hidden'}}>
            <Buttons variant='outlined' sx={{aspectRatio: '1/1', height: '52px', width: '52px'}}><FontAwesomeIcon color='' size='2x' icon={faSliders} /></Buttons>
            <Buttons variant='outlined' sx={{}}><img style={{width: 40, aspectRatio: '1/1', borderRadius: 10}} src={pink} /><ButtonText variant='h6' > Headset </ButtonText></Buttons>
            <Buttons variant='outlined' sx={{}}><img style={{width: 40, aspectRatio: '1/1', borderRadius: 10}} src={pink} /><ButtonText variant='h6' > Headset </ButtonText></Buttons>
            <Buttons variant='outlined' sx={{}}><img style={{width: 40, aspectRatio: '1/1', borderRadius: 10}} src={pink} /><ButtonText variant='h6' > Headset </ButtonText></Buttons>
            <Buttons variant='outlined' sx={{}}><img style={{width: 40, aspectRatio: '1/1', borderRadius: 10}} src={pink} /><ButtonText variant='h6' > Headset </ButtonText></Buttons>
          </Stack>
  )
}

export default Categories
