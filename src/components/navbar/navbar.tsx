import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.scss';
import profilePic from '../../../src/assests/profilePic.svg';

export default function NavBar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className='navBar'>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon className='menuButton' />
            </IconButton>
            <img src={profilePic} className='profilePic'/>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }