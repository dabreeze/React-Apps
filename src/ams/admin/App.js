import React from 'react';
import Auth from "../admin/views/auth/Auth"
import AuthContainer from './components/auth/AuthContainer';
import Dashboard from './views/dashboard/Dashboard';

const App = () => {
    return (
        <Box bg="#F5F5F5" height="100vh"> 
            {/* <Auth /> */}
            <Dashboard />
            
        </Box>
    )
}

export default App;
