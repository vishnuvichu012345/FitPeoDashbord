import React from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Avatar, Grid, InputAdornment, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import img from "../img/person2.jpg";

const TopBar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    function notificationsLabel(count) {
        if (count === 0) {
            return 'no notifications';
        }
        if (count > 99) {
            return 'more than 99 notifications';
        }
        return `${count} notifications`;
    }

    return (
        <div style={{
            height: isMobile ? '16vh' : '10vh', backgroundColor: '#0F2D6B', display: 'flex', alignItems: 'center',
        }}
        >
            <Grid container spacing={2} style={{ display: 'flex', alignItems: 'center' }}>
                {isMobile ? (
                    <Grid item xs={1} sm={1} md={1} >
                        <MenuIcon style={{ color: 'white' }} onClick={toggleDrawer(true)} />
                    </Grid>
                ) : null}
                <Grid item xs={11} sm={7} md={7} lg={8} xl={8} style={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start'}}>
                    <TextField
                        id="outlined-select-currency"
                        size="small"
                        placeholder="Search..."
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon sx={{ color: 'white',margin:'10px' }} />
                                </InputAdornment>
                            ),
                            sx: {
                                marginLeft: '10px',
                                color: 'white',
                                '& .MuiInputBase-input': {
                                    color: 'white',
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'white',
                                },
                                '& .MuiInput-underline:before': {
                                    borderBottomColor: 'white',
                                },
                                '& .MuiInput-underline:after': {
                                    borderBottomColor: 'white',
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: 'white',
                                },
                                '& .MuiOutlinedInput-input': {
                                    color: 'white',
                                },
                            },
                        }}
                        sx={{
                            width: '100%',
                            maxWidth: {
                                xs: '200px',
                                sm: '300px',
                                md: '400px',
                            },
                            '& .MuiInputLabel-root': {
                                color: 'white',
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'white',
                                },
                            },
                        }}
                    />
                </Grid>

                <Grid item xs={12} sm={4} md={4} lg={4} xl={4} container spacing={1} sx={{ justifyContent: isMobile ? 'center' : 'flex-end' }}>
                    <Grid item>
                        <Avatar alt="Mail Icon" sx={{ backgroundColor: '#0E45B7', color: 'white' }}>
                            <MailOutlineIcon />
                        </Avatar>
                    </Grid>
                    <Grid item>
                        <Avatar alt="Settings Icon" sx={{ backgroundColor: '#0E45B7', color: 'white' }}>
                            <SettingsIcon />
                        </Avatar>
                    </Grid>
                    <Grid item>
                        <Avatar alt="Notifications Icon" sx={{ backgroundColor: '#0E45B7', color: 'white' }}>
                            <Badge badgeContent={100} color="secondary">
                                <NotificationsIcon aria-label={notificationsLabel(100)} />
                            </Badge>
                        </Avatar>
                    </Grid>
                    <Grid item>
                        <Avatar alt="User Avatar" src={img} sx={{ backgroundColor: '#0E45B7', color: 'white' }} />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default TopBar;
