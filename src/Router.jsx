import { useState } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './Layouts/DefaultLayout';
import Home from './Pages/Home';

const router = createBrowserRouter ([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
]);

export default router;