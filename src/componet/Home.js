import React from 'react';
import CustomDrawer from './CustomDrawer';
import CustomAppBar from './CustomAppBar';
import Dashboard from './Dashboard';
import '../componet/styles.css';

const Home = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <div style={{ height: '20vh', }}>
                {/* <CustomDrawer /> */}
            </div>
            <div style={{ display: 'flex', flex: 1,width:'90%' }}>
                <div className="custom-drawer">
                    {/* <CustomAppBar /> */}
                </div>
                <div className="custom-dashboard" >
                    {/* <Dashboard /> */}
                </div>
            </div>
        </div>
    );
};

export default Home;
