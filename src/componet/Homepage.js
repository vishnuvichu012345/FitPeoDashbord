import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Box, Card, CardContent, Grid, InputAdornment, Rating, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useMediaQuery } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import img from "../img/image.jpg";
import img1 from "../img/img2 (1).jpg"
import img2 from "../img/img2 (2).jpg"

import Dashboard from './Dashboard';
import orderIcon from '../img/3721818.png';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import CircularProgress from '@mui/joy/CircularProgress';
import { useCountUp } from 'use-count-up';
import { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Chip, List, ListItem, ListItemButton, ListItemContent, ListItemDecorator } from '@mui/joy';
import { Home, KeyboardArrowRight } from '@mui/icons-material';

import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import SummarizeIcon from '@mui/icons-material/Summarize';
// import Table from '@mui/joy/Table';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import StarIcon from '@mui/icons-material/Star';

import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts'
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LogoutIcon from '@mui/icons-material/Logout';

import Drawer from '@mui/material/Drawer';

function notificationsLabel(count) {
    if (count === 0) {
        return 'no notifications';
    }
    if (count > 99) {
        return 'more than 99 notifications';
    }
    return `${count} notifications`;
}

const CustomBarShape = (props) => {
    const { fill, x, y, width, height } = props;
    return (
        <rect
            x={x}
            y={y}
            width={width}
            height={height}
            fill={fill}
            rx={15} // Set the border radius here
        />
    );
};

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const Homepage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [isLoading, setIsLoading] = React.useState(false);
    const [buttonLabel, setButtonLabel] = React.useState('Start');

    const { value: value1, reset: resetValue1 } = useCountUp({
        isCounting: isLoading,
        duration: 1,
        start: 0,
        end: 25,
        onComplete: () => {
            setIsLoading(false);
            setButtonLabel('Reset');
        },
    });

    const { value: value2, reset } = useCountUp({
        isCounting: true,
        duration: 1,
        start: 0,
        end: 75,
    });

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const handleButtonClick = () => {
        if (isLoading) {
            setIsLoading(false);
            setButtonLabel('Start');
            resetValue1();
        } else if (buttonLabel === 'Reset') {
            setButtonLabel('Start');
            resetValue1();
        } else {
            setIsLoading(true);
            setButtonLabel('Reset');
        }
    };

    const data = [
        {
            name: '5',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: '9',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: '11',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: '12',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: '15',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: '17',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: '19',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '21',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: '23',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },

        {
            name: '25',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },

        {
            name: '27',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    const [hover2, setHover2] = React.useState(-1);

    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const DrawerList = (
        <Box sx={{ width: 100 }} role="presentation" onClick={toggleDrawer(false)}>
            <div style={{  backgroundColor: '#2e0a2d', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                    <List component="nav" aria-label="main mailbox folders" style={{ height: '9vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <AcUnitIcon style={{ width: '38px', height: '38px', color: '#8f5b8c' }} />

                    </List>
                    <Divider />
                    <List component="nav" aria-label="secondary mailbox folder">
                        <ListItemButton
                            selected={selectedIndex === 1}
                            onClick={(event) => handleListItemClick(event, 1)}
                        >
                            <HomeIcon primary="Trash" style={{ color: '#8f5b8c' }} />
                        </ListItemButton>
                        <ListItemButton
                            selected={selectedIndex === 2}
                            onClick={(event) => handleListItemClick(event, 2)}
                        >
                            <BarChartIcon primary="Trash" style={{ color: '#8f5b8c' }} />
                        </ListItemButton>
                        <ListItemButton
                            selected={selectedIndex === 3}
                            onClick={(event) => handleListItemClick(event, 3)}
                        >
                            <FactCheckIcon primary="Trash" style={{ color: '#8f5b8c' }} />
                        </ListItemButton>
                        <ListItemButton
                            selected={selectedIndex === 4}
                            onClick={(event) => handleListItemClick(event, 4)}
                        >
                            <AccountBalanceWalletIcon primary="Trash" style={{ color: '#8f5b8c' }} />
                        </ListItemButton>
                        <ListItemButton
                            selected={selectedIndex === 5}
                            onClick={(event) => handleListItemClick(event, 5)}
                        >
                            <AssignmentTurnedInIcon primary="Trash" style={{ color: '#8f5b8c' }} />
                        </ListItemButton>

                    </List>
                </div>
                <div>
                    <List component="nav" aria-label="secondary mailbox folder">
                        <ListItemButton
                            selected={selectedIndex === 6}
                            onClick={(event) => handleListItemClick(event, 6)}
                        >
                            <LogoutIcon primary="Trash" style={{ color: '#8f5b8c' }} />
                        </ListItemButton>

                    </List>
                </div>

            </div>
        </Box>
    );


    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex' }}>
            {
                !isMobile ? (
                    <div style={{ width: '4vw', backgroundColor: '#2e0a2d', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>
                            <List component="nav" aria-label="main mailbox folders" style={{ height: '9vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <AcUnitIcon style={{ width: '38px', height: '38px', color: '#8f5b8c' }} />

                            </List>
                            <Divider />
                            <List component="nav" aria-label="secondary mailbox folder">
                                <ListItemButton
                                    selected={selectedIndex === 1}
                                    onClick={(event) => handleListItemClick(event, 1)}
                                >
                                    <HomeIcon primary="Trash" style={{ color: '#8f5b8c' }} />
                                </ListItemButton>
                                <ListItemButton
                                    selected={selectedIndex === 2}
                                    onClick={(event) => handleListItemClick(event, 2)}
                                >
                                    <BarChartIcon primary="Trash" style={{ color: '#8f5b8c' }} />
                                </ListItemButton>
                                <ListItemButton
                                    selected={selectedIndex === 3}
                                    onClick={(event) => handleListItemClick(event, 3)}
                                >
                                    <FactCheckIcon primary="Trash" style={{ color: '#8f5b8c' }} />
                                </ListItemButton>
                                <ListItemButton
                                    selected={selectedIndex === 4}
                                    onClick={(event) => handleListItemClick(event, 4)}
                                >
                                    <AccountBalanceWalletIcon primary="Trash" style={{ color: '#8f5b8c' }} />
                                </ListItemButton>
                                <ListItemButton
                                    selected={selectedIndex === 5}
                                    onClick={(event) => handleListItemClick(event, 5)}
                                >
                                    <AssignmentTurnedInIcon primary="Trash" style={{ color: '#8f5b8c' }} />
                                </ListItemButton>

                            </List>
                        </div>
                        <div>
                            <List component="nav" aria-label="secondary mailbox folder">
                                <ListItemButton
                                    selected={selectedIndex === 6}
                                    onClick={(event) => handleListItemClick(event, 6)}
                                >
                                    <LogoutIcon primary="Trash" style={{ color: '#8f5b8c' }} />
                                </ListItemButton>

                            </List>
                        </div>

                    </div>
                ) : (
                    <>

                        <Drawer open={open} onClose={toggleDrawer(false)}>
                            {DrawerList}
                        </Drawer>
                    </>
                )
            }
            <div style={{ width: isMobile ? '100vw' : '96vw', height: '100vh' }}>
                <div style={{
                    height: isMobile ? '16vh' : '10vh', backgroundColor: '#2e0a2d', display: 'flex', alignItems: 'center',
                }}
                >
                    <Grid container spacing={2} style={{ display: 'flex', alignItems: 'center' }}>
                        {isMobile ? (
                            <Grid item xs={1} sm={1} md={1} >
                                {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
                                <MenuIcon style={{ color: 'white' }} onClick={toggleDrawer(true)} />
                            </Grid>
                        ) : (<>
                        </>)

                        }
                        <Grid item xs={11} sm={7} md={7} lg={8} xl={8} style={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start' }}>
                            <TextField

                                id="outlined-select-currency"
                                size="small"
                                placeholder="Search..."
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon sx={{ color: 'gray' }} />
                                        </InputAdornment>
                                    ),
                                    sx: {
                                        marginLeft: '10px',
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
                                    width: '100%',
                                    maxWidth: {
                                        xs: '200px',
                                        sm: '300px',
                                        md: '400px',
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

                        <Grid item xs={12} sm={4} md={4} lg={4} xl={4} container spacing={1} sx={{ justifyContent: isMobile ? 'center' : 'flex-end' }}>
                            <Grid item>
                                <Avatar alt="Mail Icon">
                                    <MailOutlineIcon />
                                </Avatar>
                            </Grid>
                            <Grid item>
                                <Avatar alt="Settings Icon">
                                    <SettingsIcon />
                                </Avatar>
                            </Grid>
                            <Grid item>
                                <Avatar alt="Notifications Icon">
                                    <Badge badgeContent={100} color="secondary">
                                        <NotificationsIcon aria-label={notificationsLabel(100)} />
                                    </Badge>
                                </Avatar>
                            </Grid>
                            <Grid item>
                                <Avatar alt="User Avatar" src={img} />
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <div style={{ height: isMobile ? '84vh' : '90vh', width: '100%', backgroundColor: '#5c2c5a', overflow: 'auto', display: 'flex', justifyContent: 'center' }}>
                    <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center', width: '96%' }}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Typography
                                sx={{ m: 1, fontFamily: 'Roboto Slab', fontWeight: 'bold', display: 'flex', color: 'white' }}
                                variant="h4"
                            >
                                Dashboard
                            </Typography>


                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={8} xl={8} style={{ padding: '10px' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                                    <Card style={{ boxShadow: '0 10px 10px 2px rgba(0, 0, 0, 0.2)', borderRadius: '5px', width: '100%', height: '100%', minHeight: '185px', backgroundColor: '#2e0a2d' }}>
                                        <CardContent>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12}>
                                                    <Card style={{ boxShadow: '0 10px 10px 2px rgba(0, 0, 0, 0.2)', borderRadius: '15px', width: '50px', height: '50px', backgroundColor: '#6c8fcc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                        <CardContent style={{ display: 'flex', justifyContent: 'center' }}>
                                                            {/* <img src={orderIcon} alt="Order Icon" style={{ backgroundColor: '#6c8fcc', width: '40px', height: '40px' }} /> */}
                                                            <ShoppingBasketIcon style={{ backgroundColor: '#6c8fcc', width: '40px', height: '40px' }} />
                                                        </CardContent>
                                                    </Card>
                                                </Grid>
                                                <Grid item xs={12} style={{ display: 'flex' }}>
                                                    <Typography variant="h7" style={{ color: 'white', }}>
                                                        Total Order
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                                    <Typography variant="h5" style={{ color: 'white', fontWeight: 'bold', fontSize: '32px' }}>
                                                        70
                                                    </Typography>
                                                    <Typography style={{ color: 'white', display: 'flex' }}>
                                                        <div style={{
                                                            display: 'flex',
                                                            alignContent: 'flex-start',
                                                            alignItems: 'center'
                                                        }}>
                                                            <span style={{ display: 'flex', alignItems: 'flex-end', color: '#2adb44' }}>
                                                                <ArrowDropUpIcon />
                                                            </span>
                                                            <span style={{ color: '#2adb44' }}>
                                                                3%
                                                            </span>
                                                        </div>
                                                    </Typography>

                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                                    <Card style={{ boxShadow: '0 10px 10px 2px rgba(0, 0, 0, 0.2)', borderRadius: '5px', width: '100%', height: '100%', minHeight: '185px', backgroundColor: '#2e0a2d' }}>
                                        <CardContent>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12}>
                                                    <Card style={{ boxShadow: '0 10px 10px 2px rgba(0, 0, 0, 0.2)', borderRadius: '15px', width: '50px', height: '50px', backgroundColor: '#82cc6c', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                        <CardContent style={{ display: 'flex', justifyContent: 'center' }}>
                                                            {/* <img src={orderIcon} alt="Order Icon" style={{ backgroundColor: '#82cc6c', width: '40px', height: '40px' }} /> */}
                                                            <LocalMallIcon style={{ backgroundColor: '#82cc6c', width: '40px', height: '40px' }} />
                                                        </CardContent>
                                                    </Card>
                                                </Grid>
                                                <Grid item xs={12} style={{ display: 'flex' }}>
                                                    <Typography variant="h7" style={{ color: 'white' }}>
                                                        Total Delivered
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                                    <Typography variant="h5" style={{ color: 'white', fontWeight: 'bold', fontSize: '32px' }}>
                                                        70
                                                    </Typography>
                                                    <Typography style={{ color: 'white', display: 'flex' }}>
                                                        <div style={{
                                                            display: 'flex',
                                                            alignContent: 'flex-start',
                                                            alignItems: 'center'
                                                        }}>
                                                            <span style={{ display: 'flex', alignItems: 'flex-end', color: '#db2a2a' }}>
                                                                <ArrowDropDownIcon />
                                                            </span>
                                                            <span style={{ color: '#db2a2a' }}>
                                                                3%
                                                            </span>
                                                        </div>
                                                    </Typography>

                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                                    <Card style={{ boxShadow: '0 10px 10px 2px rgba(0, 0, 0, 0.2)', borderRadius: '5px', width: '100%', height: '100%', minHeight: '185px', backgroundColor: '#2e0a2d' }}>
                                        <CardContent>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12}>
                                                    <Card style={{ boxShadow: '0 10px 10px 2px rgba(0, 0, 0, 0.2)', borderRadius: '15px', width: '50px', height: '50px', backgroundColor: '#cc6c76', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                        <CardContent style={{ display: 'flex', justifyContent: 'center' }}>
                                                            <LocalMallIcon style={{ backgroundColor: '#cc6c76', width: '40px', height: '40px' }} />
                                                        </CardContent>
                                                    </Card>
                                                </Grid>
                                                <Grid item xs={12} style={{ display: 'flex' }}>
                                                    <Typography variant="h7" style={{ color: 'white' }}>
                                                        Total Cancelled
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                                    <Typography variant="h5" style={{ color: 'white', fontWeight: 'bold', fontSize: '32px' }}>
                                                        70
                                                    </Typography>
                                                    <Typography style={{ color: 'white', display: 'flex' }}>
                                                        <div style={{
                                                            display: 'flex',
                                                            alignContent: 'flex-start',
                                                            alignItems: 'center'
                                                        }}>
                                                            <span style={{ display: 'flex', alignItems: 'flex-end', color: '#2adb44' }}>
                                                                <ArrowDropUpIcon />
                                                            </span>
                                                            <span style={{ color: '#2adb44' }}>
                                                                3%
                                                            </span>
                                                        </div>
                                                    </Typography>

                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                                    <Card style={{ boxShadow: '0 10px 10px 2px rgba(0, 0, 0, 0.2)', borderRadius: '5px', width: '100%', height: '100%', minHeight: '185px', backgroundColor: '#2e0a2d' }}>
                                        <CardContent>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12}>
                                                    <Card style={{ boxShadow: '0 10px 10px 2px rgba(0, 0, 0, 0.2)', borderRadius: '15px', width: '50px', height: '50px', backgroundColor: '#ca6ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                        <CardContent style={{ display: 'flex', justifyContent: 'center' }}>
                                                            {/* <img src={orderIcon} alt="Order Icon" style={{ backgroundColor: '#ca6ccc', width: '40px', height: '40px' }} /> */}

                                                            <KeyboardDoubleArrowDownIcon style={{ backgroundColor: '#ca6ccc', width: '40px', height: '40px' }} />
                                                        </CardContent>
                                                    </Card>
                                                </Grid>
                                                <Grid item xs={12} style={{ display: 'flex' }}>
                                                    <Typography variant="h7" style={{ color: 'white' }}>
                                                        Total Revenue
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                                    <Typography variant="h5" style={{ color: 'white', fontWeight: 'bold', fontSize: '32px' }}>
                                                        $120k
                                                    </Typography>
                                                    <Typography style={{ color: 'white', display: 'flex' }}>
                                                        <div style={{
                                                            display: 'flex',
                                                            alignContent: 'flex-start',
                                                            alignItems: 'center'
                                                        }}>
                                                            <span style={{ display: 'flex', alignItems: 'flex-end', color: '#db2a2a' }}>
                                                                <ArrowDropDownIcon />
                                                            </span>
                                                            <span style={{ color: '#db2a2a' }}>
                                                                3%
                                                            </span>

                                                        </div>
                                                    </Typography>

                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12}>
                                    <Card style={{ boxShadow: '0 10px 10px 2px rgba(0, 0, 0, 0.2)', borderRadius: '5px', width: '100%', height: '210px', backgroundColor: '#2e0a2d' }}>
                                        <CardContent style={{ height: '100%' }}>
                                            <ResponsiveContainer width="100%" height="100%">
                                                <BarChart
                                                    width={500}
                                                    height={300}
                                                    data={data}
                                                    margin={{
                                                        top: 5,
                                                        right: 30,
                                                        left: 20,
                                                        bottom: 5,
                                                    }}
                                                >
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="name" />
                                                    <YAxis />
                                                    {/* <Tooltip /> */}
                                                    <Legend />
                                                    <Bar dataKey="pv" fill="#8884d8" shape={<CustomBarShape />} />
                                                    <Bar dataKey="uv" fill="#82ca9d" shape={<CustomBarShape />} />
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Card style={{ boxShadow: '0 10px 10px 2px rgba(0, 0, 0, 0.2)', borderRadius: '5px', width: '100%', height: '310px', backgroundColor: '#2e0a2d' }}>
                                        <CardContent >
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} style={{ display: 'flex' }}>
                                                    <Typography variant="h5" style={{ color: 'white' }}>
                                                        Recent Orders
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} style={{ display: 'flex' }}>
                                                    <TableContainer sx={{ height: '300px', overflow: 'auto' }}>
                                                        <Table aria-label="basic table">
                                                            <TableHead sx={{ backgroundColor: 'transparent' }}>
                                                                <TableRow>
                                                                    <TableCell sx={{ width: '40%', color: 'white' }}>Customer</TableCell>
                                                                    <TableCell sx={{ color: 'white' }}>Order No.</TableCell>
                                                                    <TableCell sx={{ color: 'white' }}>Amount</TableCell>
                                                                    <TableCell sx={{ color: 'white' }}>Status</TableCell>
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                <TableRow>
                                                                    <TableCell sx={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                                                                        <span style={{ marginRight: '10px' }}>
                                                                            <Avatar alt="Remy Sharp" src={img} />
                                                                        </span>
                                                                        <span>
                                                                            Wade Warren
                                                                        </span>
                                                                    </TableCell>
                                                                    <TableCell sx={{ color: 'white' }}>1590000</TableCell>
                                                                    <TableCell sx={{ color: 'white' }}>$126.00</TableCell>
                                                                    <TableCell sx={{ color: 'white' }}> <Chip color="success" variant="solid">Delivered</Chip></TableCell>

                                                                </TableRow>
                                                                <TableRow>
                                                                    <TableCell sx={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                                                                        <span style={{ marginRight: '10px' }}>
                                                                            <Avatar alt="Remy Sharp" src={img2} />
                                                                        </span>
                                                                        <span>
                                                                            Jane Cooper
                                                                        </span>
                                                                    </TableCell>
                                                                    <TableCell sx={{ color: 'white' }}>12477454</TableCell>
                                                                    <TableCell sx={{ color: 'white' }}>$365.00</TableCell>
                                                                    <TableCell sx={{ color: 'white' }}> <Chip color="success" variant="solid">Delivered</Chip></TableCell>

                                                                </TableRow>
                                                                <TableRow>
                                                                    <TableCell sx={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                                                                        <span style={{ marginRight: '10px' }}>
                                                                            <Avatar alt="Remy Sharp" src={img1} />
                                                                        </span>
                                                                        <span>
                                                                            Guy Hawkins
                                                                        </span>
                                                                    </TableCell>
                                                                    <TableCell sx={{ color: 'white' }}>7982145</TableCell>
                                                                    <TableCell sx={{ color: 'white' }}>$16.00</TableCell>
                                                                    <TableCell sx={{ color: 'white' }}> <Chip color="danger" variant="solid">Delivered</Chip></TableCell>

                                                                </TableRow>
                                                                <TableRow>
                                                                    <TableCell sx={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                                                                        <span style={{ marginRight: '10px' }}>
                                                                            <Avatar alt="Remy Sharp" src={img} />
                                                                        </span>
                                                                        <span>
                                                                            Wade
                                                                        </span>
                                                                    </TableCell>
                                                                    <TableCell sx={{ color: 'white' }}>1590000</TableCell>
                                                                    <TableCell sx={{ color: 'white' }}>$126.00</TableCell>
                                                                    <TableCell sx={{ color: 'white' }}> <Chip color="success" variant="solid">Delivered</Chip></TableCell>

                                                                </TableRow>

                                                            </TableBody>
                                                        </Table>
                                                    </TableContainer>
                                                </Grid>

                                            </Grid>

                                        </CardContent>
                                    </Card>
                                </Grid>

                            </Grid>

                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={4} xl={4} style={{ padding: '10px' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Card style={{ boxShadow: '0 10px 10px 2px rgba(0, 0, 0, 0.2)', borderRadius: '5px', width: '100%', height: '100%', minHeight: '185px', backgroundColor: '#2e0a2d' }}>
                                        <CardContent>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} style={{ display: 'flex' }}>
                                                    <Typography style={{ color: 'white' }}>
                                                        Total Delivered
                                                    </Typography>
                                                </Grid>
                                                {/* <Grid item xs={12} style={{ display: 'flex' }}>
                                                    <Typography variant="h7" style={{ color: 'white' }}>
                                                        Total Delivered
                                                    </Typography>
                                                </Grid> */}
                                                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                                    <Typography variant="h5" style={{ color: 'white', fontWeight: 'bold', fontSize: '46px' }}>
                                                        $67501
                                                    </Typography>

                                                    <div style={{
                                                        display: 'flex',
                                                        alignContent: 'flex-start',
                                                        alignItems: 'center'
                                                    }}>
                                                        {/* <span style={{ display: 'flex', alignItems: 'flex-end', color: '#db2a2a' }}>
                                                                <ArrowDropDownIcon />
                                                            </span>
                                                            <span style={{ color: '#db2a2a' }}>
                                                                3%
                                                            </span> */}
                                                        <Stack direction="row" alignItems="center" flexWrap="wrap" spacing={10} sx={{ color: '#6a23b0', }}>
                                                            <Stack spacing={2}>
                                                                <CircularProgress
                                                                    size="lg"
                                                                    determinate
                                                                    value={value2}
                                                                    color="success"

                                                                    sx={{
                                                                        '--CircularProgress-size': '80px',
                                                                        color: 'white', // Set the desired color here
                                                                        '& .MuiCircularProgress-circle': {
                                                                            stroke: 'white', // Ensure the stroke color is also set
                                                                        }
                                                                    }}
                                                                >
                                                                    <div>
                                                                        <Typography style={{ fontSize: '12px' }}>{value2}%</Typography>
                                                                        <Typography style={{ fontSize: '8px' }}>Goal </Typography>
                                                                        <Typography style={{ fontSize: '8px' }}> Completed</Typography>
                                                                    </div>
                                                                </CircularProgress>
                                                                {/* <Button size="sm" variant="outlined" color="neutral" onClick={reset}>
            Reload
        </Button> */}
                                                            </Stack>
                                                        </Stack>
                                                    </div>


                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Card style={{ boxShadow: '0 10px 10px 2px rgba(0, 0, 0, 0.2)', borderRadius: '5px', width: '100%', height: '100%', minHeight: '210px', backgroundColor: '#2e0a2d' }}>
                                        <CardContent>
                                            <List>

                                                <ListItem>
                                                    <ListItemButton color="warning">
                                                        <ListItemDecorator>
                                                            <ModeStandbyIcon sx={{ fontSize: 42 }} />
                                                        </ListItemDecorator>
                                                        <ListItemContent>Goals</ListItemContent>
                                                        <KeyboardArrowRight sx={{ fontSize: 42 }} />
                                                    </ListItemButton>
                                                </ListItem>


                                                <ListItem>
                                                    <ListItemButton color="primary">
                                                        <ListItemDecorator><FastfoodIcon sx={{ fontSize: 42 }} /></ListItemDecorator>
                                                        <ListItemContent>Popular Dishes</ListItemContent>
                                                        <KeyboardArrowRight sx={{ fontSize: 42 }} />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem>
                                                    <ListItemButton color="success">
                                                        <ListItemDecorator><SummarizeIcon sx={{ fontSize: 42 }} /></ListItemDecorator>
                                                        <ListItemContent>Menus</ListItemContent>
                                                        <KeyboardArrowRight sx={{ fontSize: 42 }} />
                                                    </ListItemButton>
                                                </ListItem>

                                            </List>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Card style={{ boxShadow: '0 10px 10px 2px rgba(0, 0, 0, 0.2)', borderRadius: '5px', width: '100%', height: '310px', backgroundColor: '#2e0a2d', overflow: 'auto' }}>
                                        <CardContent>
                                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                                <ListItem alignItems="flex-start">
                                                    <ListItemAvatar>
                                                        <Avatar alt="Remy Sharp" src={img} />
                                                    </ListItemAvatar>
                                                    <ListItemText
                                                        primary={
                                                            <React.Fragment>
                                                                <Typography
                                                                    sx={{ display: 'inline', textAlign: 'left', width: '100%' }}
                                                                    color="#ed5a02"
                                                                >
                                                                    Jenny Wilson
                                                                </Typography>
                                                                <Box
                                                                    sx={{
                                                                        width: 200,
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        color: 'white',
                                                                    }}

                                                                >
                                                                    <Rating
                                                                        name="hover-feedback"
                                                                        value={value}
                                                                        precision={0.5}
                                                                        getLabelText={getLabelText}
                                                                        onChange={(event, newValue) => {
                                                                            setValue(newValue);
                                                                        }}
                                                                        onChangeActive={(event, newHover) => {
                                                                            setHover(newHover);
                                                                        }}
                                                                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                                                        sx={{

                                                                            '& .MuiRating-iconHover': {
                                                                                backgroundColor: 'transparent', // Remove hover background color
                                                                            },
                                                                        }}
                                                                    />
                                                                    {value !== null && (
                                                                        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                                                                    )}
                                                                </Box>
                                                            </React.Fragment>
                                                        }
                                                        secondary={
                                                            <React.Fragment>
                                                                <Typography
                                                                    sx={{ display: 'inline', textAlign: 'left', width: '100%' }}
                                                                    component="span"
                                                                    variant="body2"
                                                                    color="#ed5a02"
                                                                >
                                                                    The Food Was Excellent and so was the Service. I have the mushroom risotto with scallops which was awesome.
                                                                </Typography>
                                                            </React.Fragment>
                                                        }
                                                    />
                                                </ListItem>
                                                <Divider variant="inset" component="li" />
                                                <ListItem alignItems="flex-start">
                                                    <ListItemAvatar>
                                                        <Avatar alt="Remy Sharp" src={img1} />
                                                    </ListItemAvatar>
                                                    <ListItemText
                                                        primary={
                                                            <React.Fragment>
                                                                <Typography
                                                                    sx={{ display: 'inline', textAlign: 'left', width: '100%' }}
                                                                    color="#ed5a02"
                                                                >
                                                                    Wilson
                                                                </Typography>
                                                                <Box
                                                                    sx={{
                                                                        width: 200,
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        color: 'white',
                                                                    }}
                                                                >
                                                                    <Rating
                                                                        name="hover-feedback"
                                                                        value={value}
                                                                        precision={0.5}
                                                                        getLabelText={getLabelText}
                                                                        onChange={(event, newValue) => {
                                                                            setValue(newValue);
                                                                        }}
                                                                        onChangeActive={(event, newHover) => {
                                                                            setHover2(newHover);
                                                                        }}
                                                                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                                                        sx={{
                                                                            '& .MuiRating-iconHover': {
                                                                                backgroundColor: 'transparent', // Remove hover background color
                                                                            },
                                                                        }}
                                                                    />
                                                                    {value !== null && (
                                                                        <Box sx={{ ml: 2 }}>{labels[hover2 !== -1 ? hover2 : value]}</Box>
                                                                    )}
                                                                </Box>
                                                            </React.Fragment>
                                                        }
                                                        secondary={
                                                            <React.Fragment>
                                                                <Typography
                                                                    sx={{ display: 'inline', textAlign: 'left', width: '100%' }}
                                                                    component="span"
                                                                    variant="body2"
                                                                    color="#ed5a02"
                                                                >
                                                                    The Food Was Excellent and so was the Service. I have the mushroom risotto with scallops which was awesome.
                                                                </Typography>
                                                            </React.Fragment>
                                                        }
                                                    />
                                                </ListItem>
                                                <Divider variant="inset" component="li" />
                                                <ListItem alignItems="flex-start">
                                                    <ListItemAvatar>
                                                        <Avatar alt="Remy Sharp" src={img2} />
                                                    </ListItemAvatar>
                                                    <ListItemText
                                                        primary={
                                                            <React.Fragment>
                                                                <Typography
                                                                    sx={{ display: 'inline', textAlign: 'left', width: '100%' }}
                                                                    color="#ed5a02"
                                                                >
                                                                    Wilson
                                                                </Typography>
                                                                <Box
                                                                    sx={{
                                                                        width: 200,
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        color: 'white',
                                                                    }}
                                                                >
                                                                    <Rating
                                                                        name="hover-feedback"
                                                                        value={value}
                                                                        precision={0.5}
                                                                        getLabelText={getLabelText}
                                                                        onChange={(event, newValue) => {
                                                                            setValue(newValue);
                                                                        }}
                                                                        onChangeActive={(event, newHover) => {
                                                                            setHover2(newHover);
                                                                        }}
                                                                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                                                        sx={{
                                                                            '& .MuiRating-iconHover': {
                                                                                backgroundColor: 'transparent', // Remove hover background color
                                                                            },
                                                                        }}
                                                                    />
                                                                    {value !== null && (
                                                                        <Box sx={{ ml: 2 }}>{labels[hover2 !== -1 ? hover2 : value]}</Box>
                                                                    )}
                                                                </Box>
                                                            </React.Fragment>
                                                        }
                                                        secondary={
                                                            <React.Fragment>
                                                                <Typography
                                                                    sx={{ display: 'inline', textAlign: 'left', width: '100%' }}
                                                                    component="span"
                                                                    variant="body2"
                                                                    color="#ed5a02"
                                                                >
                                                                    The Food Was Excellent and so was the Service. I have the mushroom risotto with scallops which was awesome.
                                                                </Typography>
                                                            </React.Fragment>
                                                        }
                                                    />
                                                </ListItem>
                                            </List>

                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>

            </div>
        </div >
    )
}

export default Homepage