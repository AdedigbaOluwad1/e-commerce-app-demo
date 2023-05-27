import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { 
    AppBar, 
    Box, 
    Toolbar,
    List,
    ListItem,
    IconButton
} from '@mui/material'

function Nav() {
  return (
        <AppBar position='fixed' elevation={12} sx={{bottom: 0, top: 'unset', background: 'white'}}>
            <Toolbar>
                <List sx={{height: '80px'}}>
                    <ListItem sx={{p: 0}}>
                        <IconButton color='primary' sx={{display: 'flex', flexDirection: 'column', aspectRatio: '1/1', p: '10px', fontSize: '10px', gap: '5px'}}>
                            <FontAwesomeIcon fontSize={'16px'} icon={faHouse} /> Home
                        </IconButton>
                        
                    </ListItem>
                </List>
            </Toolbar>
        </AppBar>
  )
}

export default Nav
