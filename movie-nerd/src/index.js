import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import GlobalStyled from './GlobalStyled';
import router from './router/router';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
    <GlobalStyled/>
    <RouterProvider router={router}/>
    </>
);
