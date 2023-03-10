import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store, persistor } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CabinetPage } from './pages/CabinetPage';
import { ErrorPage } from '../src/pages/ErrorPage';
import { Layout } from './layout/Layout';
import { HomePage } from './pages/HomePage';
import { Authorization } from './pages/auth/Authorization';
import { Registration } from './pages/auth/Registration';
import { CartPage } from './pages/CartPage';
import { ProductPage } from './pages/ProductPage';
import './index.css';

const router = createBrowserRouter([
    {
        path: '/shop',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/shop',
                element: <HomePage />,
            },
            {
                path: '/shop/cabinet',
                element: <CabinetPage />,
            },
            {
                path: '/shop/authorization',
                element: <Authorization />,
            },
            {
                path: '/shop/registration',
                element: <Registration />,
            },
            {
                path: '/shop/cart',
                element: <CartPage />,
            },
            {
                path: '/shop/:productId',
                element: <ProductPage />,
            },
        ],
    },
    // { basename: '/shop' },
]);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={router} />
        </PersistGate>
    </Provider>
);
