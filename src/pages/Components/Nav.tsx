import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import routes from '@/routes'
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
            <Toolbar sx={{width: '100%'}}>
                <List sx={{height: '80px', display: 'flex', justifyContent: 'space-evenly', width: '100%'}}>
                    {Object.values(routes).map(({ path, title, icon, link }) => {
                        return (
                            <ListItem sx={{p: 0, display: link ? 'block' : 'none', width: 'fit-content'}} key={path}>
                                <IconButton color='primary' sx={{display: 'flex', flexDirection: 'column', aspectRatio: '1/1', p: '10px', fontSize: '10px', gap: '5px'}}>
                                    <FontAwesomeIcon fontSize={'16px'} icon={icon} /> {title}
                                </IconButton> 
                            </ListItem>
                        );
                    })}
                </List>
            </Toolbar>
        </AppBar>
  )
}

export default Nav
