import React, { useState } from 'react';
import {NightIcon, LightIcon, DarkBurger, LightBurger} from '@/components/ThemeIcons';

function Navbar() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode); // Toggle dark mode state
        if (!darkMode) {
            document.documentElement.classList.add('dark'); // Add 'dark' class to <html>
        } else {
            document.documentElement.classList.remove('dark'); // Remove 'dark' class from <html>
        }
    };

    const [displayMenu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!displayMenu);
        if (displayMenu) {
            document.getElementById('sidebar').classList.remove('hidden');
        } else {
            document.getElementById('sidebar').classList.add('hidden');
        }
    }

    return (
        <>
            <nav className="navbar flex items-center justify-between py-5 w-100 lg:px-24 bg-yellow-50 dark:bg-blue-950">
                <ul className="flex justify-between gap-5">
                    <div className="gap-10 text-red-500 dark:text-yellow-200 nav-ul text-lg hidden lg:flex justify-start w-40">
                        <li className=''><a href="/">Home</a></li>
                        <li className=''><a href="/products">Products</a></li>
                        <li className=''><a href="#">About</a></li>
                        <li className=''><a href="#">Contact</a></li>
                    </div>
                </ul>
                <div className="flex w-60 mr-30">
                    <img src="/images/official.png" alt="Logo" className="h-14 w-18 pb-2 ml-4 dark:hidden" />
                    <img src="/images/official_logo.png" alt="Logo" className="h-14 w-18 pb-2 ml-4 hidden dark:block" />
                </div>
                <div className="hamburger w-30 mr-10">
                    <div className="theme hidden lg:flex">
                        <button onClick={toggleDarkMode}>
                            {darkMode ? <LightIcon/> : <NightIcon/>}
                        </button>
                    </div>
                    <div className="burger lg:hidden" onClick={toggleMenu}>
                        {darkMode ? <LightBurger/> : <DarkBurger/>}
                    </div>
                </div>
            </nav>
            <nav className="sidebar hidden bg-sky-200 float-end right-0 min-h-max w-52 rounded-md mx-10 lg:hidden" id="sidebar">
                <ul className='flex flex-col justify-start items-start gap-2 p-4 text-gray-700'>
                    <li className='w-100 hover:bg-slate-500'><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Theme</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
