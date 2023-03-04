import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CabinetPage } from './pages/CabinetPage';
import { ErrorPage } from '../src/pages/ErrorPage';
import { Layout } from './layout/Layout';
import { HomePage } from './pages/HomePage';
import { Authorization } from './pages/Authorization';
import { CartPage } from './pages/CartPage';
import { ProductPage } from './pages/ProductPage';
import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/cabinet',
                element: <CabinetPage />,
            },
            {
                path: '/authorization',
                element: <Authorization />,
            },
            {
                path: '/cart',
                element: <CartPage />,
            },
            {
                path: '/:productId',
                element: <ProductPage />,
            },
        ],
    },
]);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
