import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

function DefaultLayout() {

    const logout = () => {
        localStorage.removeItem('ACCESS_TOKEN');
        window.location.reload();        
    }

    return (
        <>
            <Navbar />
            <main>
            <Outlet />
            </main>
        </>
    )
}

export default DefaultLayout