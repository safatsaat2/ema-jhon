import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header';
import Home from './components/Layout/Home';
import OrderReview from './components/Order-review/OrderReview';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductsLoaders from './Loaders/cartProductsLoaders';
import SignUp from './components/SignUp/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'Order-Review',
        element: <OrderReview></OrderReview>,
        loader: cartProductsLoaders
      },
      {
        path: 'Manage-Inventory',
        element: <Inventory></Inventory>
      },
      {
        path:'Login',
        element: <Login></Login>
      },
      {
        path:'SignUp',
        element: <SignUp></SignUp>
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
