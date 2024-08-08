import React, { useState } from 'react'
import { List, ListItemButton, Divider } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import FitbitIcon from '@mui/icons-material/Fitbit';

const Navbar = () => {
    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <div style={{ backgroundColor: '#0F2D6B', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
                <List component="nav" aria-label="main mailbox folders" style={{ height: '9vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FitbitIcon style={{ width: '38px', height: '38px', color: 'white' }} />
                </List>
                <Divider />
                <List component="nav" aria-label="secondary mailbox folders">
                    <ListItemButton
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                        sx={{ color: 'white', '&.Mui-selected': { backgroundColor: '#0E45B7' }, '&:hover': { backgroundColor: '#0E45B7' } }}
                    >
                        <HomeIcon style={{ color: 'white' }} />
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}
                        sx={{ color: 'white', '&.Mui-selected': { backgroundColor: '#0E45B7' }, '&:hover': { backgroundColor: '#0E45B7' } }}
                    >
                        <BarChartIcon style={{ color: 'white' }} />
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 3)}
                        sx={{ color: 'white', '&.Mui-selected': { backgroundColor: '#0E45B7' }, '&:hover': { backgroundColor: '#0E45B7' } }}
                    >
                        <FactCheckIcon style={{ color: 'white' }} />
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 4}
                        onClick={(event) => handleListItemClick(event, 4)}
                        sx={{ color: 'white', '&.Mui-selected': { backgroundColor: '#0E45B7' }, '&:hover': { backgroundColor: '#0E45B7' } }}
                    >
                        <AccountBalanceWalletIcon style={{ color: 'white' }} />
                    </ListItemButton>
                    <ListItemButton
                        selected={selectedIndex === 5}
                        onClick={(event) => handleListItemClick(event, 5)}
                        sx={{ color: 'white', '&.Mui-selected': { backgroundColor: '#0E45B7' }, '&:hover': { backgroundColor: '#0E45B7' } }}
                    >
                        <AssignmentTurnedInIcon style={{ color: 'white' }} />
                    </ListItemButton>
                </List>
            </div>
        </div>
    )
}

export default Navbar;
