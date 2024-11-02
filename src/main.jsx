import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Layout.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/ContactUs.jsx";
import Shop from "./components/Shop/Shop.jsx";
import Shopcategory from "./Pages/Shopcategory.jsx";
import Product from "./Pages/Product.jsx";
import Cart from "./components/Cart/Cart.jsx";
import SigninSignup from "./Pages/SigninSignup.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "about", element: <About /> },
      { path: "contact-us", element: <Contact /> },
      { path: "men", element: <Shopcategory category="men" /> },
      { path: "kid", element: <Shopcategory category="kid" /> },
      { path: "women", element: <Shopcategory category="women" /> },
      {
        path: "product/:productId",
        element: <Product />,
      },
      { path: "cart", element: <Cart /> },
      { path: "signinSignup", element: <SigninSignup /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
);
