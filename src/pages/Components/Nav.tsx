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
                <List sx={{height: '70px'}}>
                    <ListItem sx={{p: 0}}>
                        <IconButton sx={{display: 'flex', flexDirection: 'column', aspectRatio: '1/1', p: 1, fontSize: '12px'}}>
                            <FontAwesomeIcon fontSize={'16px'} icon={faHouse} /> Home
                        </IconButton>
                        
                    </ListItem>
                </List>
            </Toolbar>
        </AppBar>
  )
}

export default Nav
