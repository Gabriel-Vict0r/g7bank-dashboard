import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Login from "./components/pages/Login/Login";
import SignUp from "./components/pages/Login/SignUp";
import GlobalStyle from "./Global/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./Global/Theme";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Profile from "./components/pages/Profile/Profile";
import AssetAndBalance from "./components/pages/Wallet/Asset&Balance";
import CardManagement from "./components/pages/Wallet/CardManagement";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/AssetAndBalance",
    element: <AssetAndBalance />,
  },
  {
    path: "/CardManagement",
    element: <CardManagement />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
