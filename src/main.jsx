import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.scss';
import Login from './views/Login/Login';
import Home from './views/Home/Home';
import Products from './views/Products/Products';
import Register from './views/Register/Register';
import Pay from './views/Pay/Pay';
import { PRODUCTS_MOCK } from './mock/products.mock';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home data={ PRODUCTS_MOCK } />,
  },
  {
    path: "/products/:productId",
    element: <Products data={ PRODUCTS_MOCK } />
  },
  {
    path: "/register/:registerId",
    element: <Register data={ PRODUCTS_MOCK } />
  },
  {
    path: "/pay",
    element: <Pay />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
