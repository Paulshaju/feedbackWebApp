import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.scss';
import profilePic from '../../../src/assests/profilePic.svg';
import uniLogo from '../../../src/assests/uniLogo.png';

export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className='navBar'>
                    <div className='logoContainer'>
                        
                        <img src={uniLogo} className='logoPic' />
                    </div>

                    <img src={profilePic} className='profilePic' />
                </Toolbar>
            </AppBar>
        </Box>
    );
}