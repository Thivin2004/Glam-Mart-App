import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const navbarBackgroundColor = '#6a77b8';

const Navbar = styled(AppBar)({
  background: navbarBackgroundColor,
  position: 'fixed',
  top: 0,
  width: '100%',
});

const HoverNavItem = styled(Link)({
  color: '#fff',
  textDecoration: 'none',
  margin: '0 15px',
  fontSize: '1.2rem',
  fontFamily: 'Arial, sans-serif',
  transition: 'border-bottom 0.3s ease, background-color 0.3s ease',
  '&:hover': {
    borderBottom: '2px solid #fff',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

const Navigation = () => {
  return (
    <Navbar>
      <Toolbar>
        <HoverNavItem to="/signup">Signup</HoverNavItem>
        <HoverNavItem to="/login">Login</HoverNavItem>
      </Toolbar>
    </Navbar>
  );
};

export default Navigation;
