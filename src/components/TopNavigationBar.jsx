import * as React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { kgfLogoNobg } from '../assets';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];
const title = 'Klintehuse Grundejerforening';

function TopNavigationBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                {title}
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            { /* the nav bar itself (shared) */}
            <AppBar component="nav" 
                sx={{ backgroundColor: "#ffffff" }}
            >
                <Toolbar>
                    { /* MOBILE ONLY SECTION */}
                    { /* DESKTOP: Logo */}
                    <Box
                        component="img"
                        src={kgfLogoNobg}
                        alt="Klintehuse Grundejerforening Logo"
                        sx={{
                            height: 70,
                            width: 70,
                            m: -1,
                            display: { xs: 'none', sm: 'block' },
                            mr: 1,
                        }}
                    />
                    {/* DESKTOP: Text title in the nav bar */}
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', color: "black" } }}
                    >
                        {title}
                    </Typography>
                    {/* DESKTOP: nav bar buttons mapped out */}
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: 'black' }}>
                                {item}
                            </Button>
                        ))}
                    </Box>

                    { /* MOBILE ONLY SECTION */}
                    {/* MOBILE: hamburger menu icon */}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' }, }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* MOBILE: Logo in the nav bar */}
                    <Box
                        component="img"
                        src={kgfLogoNobg}
                        alt="KGF Logo"
                        sx={{
                            height: 40,
                            width: 40,
                            m: -1,
                            ml: "auto",
                            display: { xs: 'block', sm: 'none' }
                        }}
                    />
                </Toolbar>
            </AppBar>
            {/* MOBILE: implementation of the drawer nav */}
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

export default TopNavigationBar;
