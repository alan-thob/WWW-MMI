import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/main.css';
import './css/vendor/bootstrap/css/bootstrap.min.css'
import App from './App';
import Team from './pages/Team';
import Result from "./pages/Result";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Parcours from "./pages/Parcours";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/team/:teamId",
        element: <Team />,
    },
    {
        path: "/team",
        element: <Team />,
    },
    {
        path: "/parcours",
        element: <Parcours />,
    },
    {
        path: "/result/:slug",
        element: <Result />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />

);
