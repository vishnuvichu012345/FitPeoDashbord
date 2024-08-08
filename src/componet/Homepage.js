import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Card, CardContent, Grid, InputAdornment, Rating, TextField } from '@mui/material';
import { useMediaQuery } from '@mui/material';

import img from "../img/person2.jpg";
import img1 from "../img/person1.jpg"
import img2 from "../img/img2 (2).jpg"

import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import LocalMallIcon from '@mui/icons-material/DeliveryDining';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';    
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import Stack from '@mui/joy/Stack';
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



import LogoutIcon from '@mui/icons-material/Logout';

import Drawer from '@mui/material/Drawer';
import Navbar from './Navbar';
import DrawerList from './DrawerList';
import TopBar from './TopBar';

function notificationsLabel(count) {
    if (count === 0) {
        return 'no notifications';
    }
    if (count > 99) {
        return 'more than 99 notifications';
    }
    return `${count} notifications`;
}




const labels = {
    0.5: 'Useless',
    1: 'Useless',
    1.5: 'Poor',
    2: 'Poor',
    2.5: 'Ok',
    3: 'Ok',
    3.5: 'Good',
    4: 'Good',
    4.5: 'Excellent',
    5: 'Excellent',
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

const Homepage = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);
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
        end: 80,
    });

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
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
    const orders = [
        {
            id: '001',
            customer: 'Wade Warren',
            avatar: img,
            orderNo: '1590000',
            amount: '$126.00',
            status: 'Delivered',
            statusColor: 'green' // light green
        },
        {
            id: '002',
            customer: 'Jane Cooper',
            avatar: img2,
            orderNo: '12477454',
            amount: '$365.00',
            status: 'Pending',
            statusColor: 'yellow' // light yellow
        },
        {
            id: '003',
            customer: 'Guy Hawkins',
            avatar: img1,
            orderNo: '7982145',
            amount: '$16.00',
            status: 'Cancelled',
            statusColor: 'red' // light red
        },
        {
            id: '004',
            customer: 'Wade',
            avatar: img,
            orderNo: '1590000',
            amount: '$126.00',
            status: 'Delivered',
            statusColor: 'green' // light green
        }
    ];
    




    const reviews = [
        {
            id: '1',
            name: 'Vishnu',
            img: 'path_to_img1.jpg',
            rating: 4.5,
            comment: 'Amazing ambiance and excellent food. The seafood pasta was to die for, and the service was friendly and prompt.',
        },
        {
            id: '2',
            name: 'Jobin',
            img: 'path_to_img2.jpg',
            rating: 5,
            comment: 'Absolutely wonderful experience! The steak was cooked to perfection, and the dessert was heavenly.',
        }
    ];
    

    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex' }}>
            {
                !isMobile ? (
                    <div style={{ width: '4vw', backgroundColor: '#0F2D6B', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                        {/* NavBar */}
                        <Navbar />
                        <div>
                            <List component="nav" aria-label="secondary mailbox folder">
                                <ListItemButton
                                    selected={selectedIndex === 6}
                                    onClick={(event) => handleListItemClick(event, 6)}
                                >
                                    <LogoutIcon primary="Trash" style={{ color: '#0E45B7' }} />
                                </ListItemButton>

                            </List>
                        </div>

                    </div>
                ) : (
                    <>

                        <Drawer open={open} onClose={toggleDrawer(false)}>
                            <DrawerList />
                        </Drawer>
                    </>
                )
            }
            <div style={{ width: isMobile ? '100vw' : '96vw', height: '100vh' }}>
                <TopBar />
                <div style={{ height: isMobile ? '84vh' : '90vh', width: '100%', backgroundColor: '#0F2D6B', overflow: 'auto', display: 'flex', justifyContent: 'center' }}>
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
                                    <Card style={{ boxShadow: '0 10px 10px 2px rgba(0, 0, 0, 0.2)', borderRadius: '5px', width: '100%', height: '100%', minHeight: '185px', backgroundColor: '#0F2D6B' }}>
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
                                                        88
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
                                                                8%
                                                            </span>
                                                        </div>
                                                    </Typography>

                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                                    <Card style={{ boxShadow: '0 10px 10px 2px rgba(0, 0, 0, 0.2)', borderRadius: '5px', width: '100%', height: '100%', minHeight: '185px', backgroundColor: '#0F2D6B' }}>
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
                                                        45
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
                                    <Card style={{ boxShadow: '0 10px 10px 2px rgba(0, 0, 0, 0.2)', borderRadius: '5px', width: '100%', height: '100%', minHeight: '185px', backgroundColor: '#0F2D6B' }}>
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
                                                        90
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
                                    <Card style={{ boxShadow: '0 10px 10px 2px rgba(0, 0, 0, 0.2)', borderRadius: '5px', width: '100%', height: '100%', minHeight: '185px', backgroundColor: '#0F2D6B' }}>
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
                                                        $110k
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
                                                                5%
                                                            </span>

                                                        </div>
                                                    </Typography>

                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12}>
                                    <Card style={{ boxShadow: '0 10px 10px 2px rgba(0, 0, 0, 0.2)', borderRadius: '5px', width: '100%', height: '210px', backgroundColor: '#0F2D6B' }}>
                                        <CardContent style={{ height: '100%' }}>
                                            <ResponsiveContainer width="100%" height="100%">
                                                <BarChart
                                                    data={data}
                                                    margin={{
                                                        top: 10,
                                                        right: 30,
                                                        left: 20,
                                                        bottom: 10,
                                                    }}
                                                >
                                                    <XAxis
                                                        dataKey="name"
                                                        stroke="#ffffff"
                                                        tick={{ fontSize: 14, fill: '#ffffff' }}
                                                    />
                                                    <YAxis
                                                        stroke="#ffffff"
                                                        tick={{ fontSize: 14, fill: '#ffffff' }}
                                                    />
                                                    <Tooltip
                                                        contentStyle={{ backgroundColor: '#333333', border: 'none' }}
                                                        labelStyle={{ color: '#ffffff' }}
                                                    />
                                                    <Legend
                                                        wrapperStyle={{ color: '#ffffff' }}
                                                    />
                                                    <Bar
                                                        dataKey="pv"
                                                        fill="#1E6F9F"
                                                        radius={[5, 5, 0, 0]} // Rounded corners for the top bars
                                                    />
                                                    <Bar
                                                        dataKey="uv"
                                                        fill="#3F7D8C"
                                                        radius={[5, 5, 0, 0]} // Rounded corners for the top bars
                                                    />
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Card style={{ boxShadow: '0 10px 10px 2px rgba(0, 0, 0, 0.2)', borderRadius: '5px', width: '100%', height: '310px', backgroundColor: '#0F2D6B' }}>
                                        <CardContent>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12}>
                                                    <Typography variant="h5" style={{ color: 'white' }}>
                                                        Recent Orders
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TableContainer sx={{ height: '300px', overflow: 'auto' }}>
                                                        <Table aria-label="recent orders table">
                                                            <TableHead sx={{ backgroundColor: 'transparent' }}>
                                                                <TableRow>
                                                                    <TableCell sx={{ padding: '16px', color: 'white' }}>Customer</TableCell>
                                                                    <TableCell sx={{ padding: '16px', color: 'white' }}>Order No.</TableCell>
                                                                    <TableCell sx={{ padding: '16px', color: 'white' }}>Amount</TableCell>
                                                                    <TableCell sx={{ padding: '16px', color: 'white' }}>Status</TableCell>
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                {orders.map((order) => (
                                                                    <TableRow key={order.id}>
                                                                        <TableCell sx={{ padding: '16px', color: 'white', display: 'flex', alignItems: 'center' }}>
                                                                            <span style={{ marginRight: '10px' }}>
                                                                                <Avatar alt={order.customer} src={order.avatar} />
                                                                            </span>
                                                                            <span>{order.customer}</span>
                                                                        </TableCell>
                                                                        <TableCell sx={{ padding: '16px', color: 'white' }}>{order.orderNo}</TableCell>
                                                                        <TableCell sx={{ padding: '16px', color: 'white' }}>{order.amount}</TableCell>
                                                                        <TableCell sx={{ padding: '16px', color: 'white' }}>
                                                                            <Chip sx={{
                                                        backgroundColor: order.statusColor,
                                                        color: '#000', // adjust text color for readability
                                                        fontWeight: 'bold',
                                                        borderRadius: '4px',
                                                        padding: '4px 8px',
                                                        fontSize: '14px'
                                                    }} variant="filled">
                                                                                {order.status}
                                                                            </Chip>
                                                                        </TableCell>
                                                                    </TableRow>
                                                                ))}
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
                                    <Card style={{ boxShadow: '0 10px 10px 2px rgba(0, 0, 0, 0.2)', borderRadius: '5px', width: '100%', height: '100%', minHeight: '185px', backgroundColor: '#0F2D6B' }}>
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
                                                        $55246
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
                                    <Card style={{ boxShadow: '0 10px 10px 2px rgba(0, 0, 0, 0.2)', borderRadius: '5px', width: '100%', height: '100%', minHeight: '210px', backgroundColor: '#0F2D6B' }}>
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
                                <Card sx={{ boxShadow: '0 10px 10px 2px rgba(0, 0, 0, 0.2)', borderRadius: '8px', width: '100%', height: 'auto', backgroundColor: '#0F2D6B', overflow: 'auto' }}>
            <CardContent>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#0F2D6B' }}>
                    {reviews.map((review) => (
                        <React.Fragment key={review.id}>
                            <ListItem alignItems="flex-start" sx={{ borderBottom: '1px solid #fff' }}>
                                <ListItemAvatar>
                                    <Avatar alt={review.name} src={review.img} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={
                                        <Typography
                                            sx={{ display: 'inline', textAlign: 'left', width: '100%', color: '#fff' }}
                                        >
                                            {review.name}
                                        </Typography>
                                    }
                                    secondary={
                                        <React.Fragment>
                                            <Box
                                                sx={{
                                                    width: 200,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    color: '#fff',
                                                    marginTop: 1
                                                }}
                                            >
                                                <Rating
                                                    name={`hover-feedback-${review.id}`}
                                                    value={review.rating}
                                                    precision={0.5}
                                                    getLabelText={getLabelText}
                                                    emptyIcon={<StarIcon style={{ opacity: 0.55, color: '#fff' }} fontSize="inherit" />}
                                                    sx={{
                                                        '& .MuiRating-iconHover': {
                                                            backgroundColor: 'transparent',
                                                        },
                                                        '& .MuiRating-iconFilled': {
                                                            color: '#ffb400'
                                                        }
                                                    }}
                                                />
                                                {review.rating !== null && (
                                                    <Box sx={{ ml: 2, color: '#fff' }}>{labels[hover !== -1 ? hover : review.rating]}</Box>
                                                )}
                                            </Box>
                                            <Typography
                                                sx={{ display: 'inline', textAlign: 'left', width: '100%', color: '#fff', marginTop: 1 }}
                                                component="span"
                                                variant="body2"
                                            >
                                                {review.comment}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" sx={{ borderColor: '#fff' }} />
                        </React.Fragment>
                    ))}
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