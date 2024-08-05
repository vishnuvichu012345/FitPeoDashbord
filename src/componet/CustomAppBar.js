import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Grid, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useMediaQuery } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import img from "../img/image.jpg"

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: '#2e0a2d', // Change the navbar color here
  boxShadow: 'none', // Remove the box shadow
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function notificationsLabel(count) {
  if (count === 0) {
    return 'no notifications';
  }
  if (count > 99) {
    return 'more than 99 notifications';
  }
  return `${count} notifications`;
}

export default function CustomAppBar({ open, handleDrawerOpen }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={8} md={8} lg={8} xl={8} style={{ display: 'flex' }}>
            <TextField
              id="outlined-select-currency"
              size="small"
              // label="Search..."
              placeholder='Search...'
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: 'gray' }} />
                  </InputAdornment>
                ),
                sx: {
                  color: 'gray',
                  '& .MuiInputBase-input': {
                    color: 'gray',
                  },
                  '& .MuiInputLabel-root': {
                    color: 'gray',
                  },
                  '& .MuiInput-underline:before': {
                    borderBottomColor: 'gray',
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: 'gray',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'gray',
                  },
                  '& .MuiOutlinedInput-input': {
                    color: 'gray',
                  },
                },
              }}
              sx={{
                width: '100%', // Full width for responsiveness
                maxWidth: {
                  xs: '200px',  // Small screens
                  sm: '300px',  // Medium screens
                  md: '400px',  // Large screens
                },
                '& .MuiInputLabel-root': {
                  color: 'gray',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'gray',
                  },
                  '&:hover fieldset': {
                    borderColor: 'gray',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'gray',
                  },
                },
              }}
            />
          </Grid>

          <Grid item xs={12} sm={4} md={4} lg={4} xl={4} container spacing={1} sx={{ justifyContent: isMobile ? 'flex-start' : 'flex-end' }} >
            <Grid item>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" >
                <MailOutlineIcon />
              </Avatar>
            </Grid>
            <Grid item>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg">
                <SettingsIcon />
              </Avatar>
            </Grid>
            <Grid item>
              <Avatar alt="Remy Sharp" src="/" >
                <NotificationsIcon aria-label={notificationsLabel(100)}>
                  <Badge badgeContent={100} color="secondary">
                    <MailIcon />
                  </Badge>
                </NotificationsIcon>
              </Avatar>
            </Grid>
            <Grid item>
              <Avatar alt="Remy Sharp" src={img} />
            </Grid>
          </Grid>
        </Grid>

      </Toolbar>
    </AppBar >
  );
}
