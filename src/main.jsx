import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ShopContextProvider from './Context/ShopContext';
import Layout from './Pages/Layout.jsx';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Contact from './Pages/ContactUs/ContactUs.jsx';
import Shop from './Pages/Shop/Shop.jsx';
import Shopcategory from './Pages/ShopCategory/Shopcategory.jsx';
import Product from './Pages/Product/Product.jsx';
import Cart from './Pages/Cart/Cart.jsx';
import SigninSignup from './Pages/Signin_Signup/SigninSignup.jsx';
// import Dashboard from './components/Dashboard/Dashboard.jsx';
import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'shop', element: <Shop /> },
      // { path: 'dashboard', element: <Dashboard /> },
      { path: 'about', element: <About /> },
      { path: 'contact-us', element: <Contact /> },
      { path: 'men', element: <Shopcategory  category="men" /> },
      { path: 'kid', element: <Shopcategory  category="kid" /> },
      { path: 'women', element: <Shopcategory  category="women" /> },
      {
        path: 'product/:productId',
        element: <Product />,
      },
      { path: 'cart', element: <Cart /> },
      { path: 'signinSignup', element: <SigninSignup /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopContextProvider>
      <RouterProvider router={router} />
    </ShopContextProvider>
  </React.StrictMode>
);
