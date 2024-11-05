import React, { useState } from 'react';

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

    return (
        <>
            <nav className="flex mx-15 my-5 lg:mx-96 justify-center items-center">
                <ul className="flex gap-4 justify-between flex-grow items-center">
                    <div className="flex">
                        <img src="/images/official.png" alt="Logo" className="h-14 w-18 pb-2 ml-4 dark:hidden" />
                        <img src="/images/official_logo.png" alt="Logo" className="h-14 w-18 pb-2 ml-4 hidden dark:block" />
                    </div>
                    <div className="flex gap-10 text-red-500 dark:text-yellow-200 nav-ul text-lg">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Products/Pricing</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                        <li>
                            <button onClick={toggleDarkMode}>
                                {darkMode ? "Light Mode" : "Dark Mode"}
                            </button>
                        </li>
                    </div>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
