import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Login from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Chart from "./pages/Chart";
import Statistics from "./pages/Statistics";
import Mypage from "./pages/Mypage";
import SignUp from "./pages/SignUp";
import ErrorPage from "./pages/ErrorPage";
import MoneyCalendar from "./pages/MoneyCalendar";
import NoticeDetail from "./pages/NoticeDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            { path: "calendar", element: <MoneyCalendar /> },
            { path: "chart", element: <Chart /> },
            { path: "statistics", element: <Statistics /> },
            { path: "mypage", element: <Mypage /> },
            { path: "login", element: <Login /> },
            { path: "signup", element: <SignUp /> },
            { path: "noticedetail/:notice", element: <NoticeDetail /> },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    <RouterProvider router={router} />
    // </React.StrictMode>
);
