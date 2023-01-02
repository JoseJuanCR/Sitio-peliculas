/*
API Key
d06bf5f4de722c7960c55d3386984823*/
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import EditProfile from '../components/EditProfile';
import Favoritos from '../components/Favoritos';
import LogIn from '../components/Forms/LogIn';
import Register from '../components/Forms/Register';
import Home from '../components/Home';
import HomeLogIn from '../components/HomeLogIn';
import HomeLogOut from '../components/HomeLogOut';
import Profile from '../components/Profile';
import Section from '../components/Section'


const router = createBrowserRouter(
    
    [
        {
            path: "/",
            element: <App />,
            errorElement: "Error",
            children: [
                {
                    path: "/",
                    element: <Home/>,
                    children: [
                        {
                            path: "/register",
                            element: <Register />,
                        },
                        {
                            path: "/login",
                            element: <LogIn />,
                        },
                    ]
                },
                {
                    path: "/section",
                    element: <Section/>,
                },
                
                {
                    path: "/homeLogin",
                    element: <HomeLogIn/>,
                },
                {
                    path: "/favoritos",
                    element: <Favoritos/>,
                },
                {
                    path: "/profile",
                    element: <Profile/>,
                },
                {
                    path: "/editProfile",
                    element: <EditProfile/>,
                },
                {
                    path: "/homeLogOut",
                    element: <HomeLogOut/>,
                },
            ]
        },
       
    ]
)

export default router