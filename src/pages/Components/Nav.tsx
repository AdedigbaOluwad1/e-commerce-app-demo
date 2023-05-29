import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import routes from '@/routes'
import { 
    AppBar,
    Toolbar,
    List,
    ListItem,
    IconButton
} from '@mui/material'

interface props {
    showNav: boolean
}
function Nav(props: props) {
    if (props.showNav) {
       return (
        <AppBar position='fixed' elevation={12} sx={{bottom: 0, top: 'unset', background: 'white'}}>
            <Toolbar sx={{width: '100%'}}>
                <List sx={{height: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', px: '30px'}}>
                    {Object.values(routes).map(({ path, title, icon, link }) => {
                        return (
                            <ListItem sx={{p: 0, display: link ? 'block' : 'none', width: 'fit-content'}} key={path}>
                                <IconButton color='primary' sx={{display: 'flex', flexDirection: 'column', aspectRatio: '1/1', p: '10px', fontSize: '12px', gap: '5px'}}>
                                    <FontAwesomeIcon fontSize={'18px'} icon={icon} /> {title}
                                </IconButton> 
                            </ListItem>
                        );
                    })}
                </List>
            </Toolbar>
        </AppBar>
    )}else {
        return (
            null
        )
    }
}

export default Nav
