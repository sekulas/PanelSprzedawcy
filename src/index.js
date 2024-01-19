import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import LoginPage from "./pages/LoginPage";
import ProtectedPage from "./pages/ProtectedPage";
import HomePage from "./pages/HomePage";
import AuthProvider from "./features/auth/AuthProvider";
import LanguageProvider from "./features/languages/LanguageProvider";
import QualityPage from "./pages/QualityPage";
import OrderPage from "./pages/OrderPage";
import OpinionsPage from "./pages/OpinionsPage";
import ShopProvider from "./features/multiple-shop-accounts/ShopProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        children: [
          {
            path: "login",
            element: <LoginPage />,
          },
          {
            element: <ProtectedPage />,
            children: [
              {
                index: true,
                element: <HomePage />,
              },
              {
                path: "quality",
                element: <QualityPage />,
              },
              {
                path: "order",
                element: <OrderPage />,
              },
              {
                path: "opinion",
                element: <OpinionsPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <LanguageProvider>
      <AuthProvider>
        <ShopProvider>
          <RouterProvider router={router} />
        </ShopProvider>
      </AuthProvider>
    </LanguageProvider>
  </React.StrictMode>
);
