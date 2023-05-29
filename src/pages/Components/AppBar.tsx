import React from 'react'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import 'typeface-lato'

interface Props {
    appBarText: string
}

function AppBar(props: Props) {
    const back = useNavigate();

    const handleGoBack = () => {
        back(-1);
    }
  return (
    <Box sx={{width: '100%'}}>
        <Stack direction={'row'} sx={{px: 3, borderBottom: '1px solid #eeeeee'}} justifyContent={'space-between'} alignItems={'center'} height={70}>
            <IconButton disableRipple onClick={handleGoBack}>
                <FontAwesomeIcon fontSize={'16px'} icon={faChevronLeft} color='#000'/>
            </IconButton>
            <Typography variant='h3' fontSize={18} fontFamily={'lato'} fontWeight={600}>
                {props.appBarText}
            </Typography>
            <IconButton disableRipple>
                <FontAwesomeIcon color='#000' fontSize={24} icon={faEllipsis} />
            </IconButton>
        </Stack>
    </Box>
  )
}

export default AppBar
