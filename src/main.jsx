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
import AuthProvider from './firebase/AuthProvider';
import Checkout from './components/Checkout/Checkout';
import PrivateRoute from './Routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
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
        element: <PrivateRoute> <Inventory></Inventory></PrivateRoute>
      },
      {
        path:'/checkout',
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
      },
      {
        path: 'Login',
        element: <Login></Login>
      },
      {
        path: 'SignUp',
        element: <SignUp></SignUp>
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
