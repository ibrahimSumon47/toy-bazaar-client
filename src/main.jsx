import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Share/Home/Home/Home.jsx";
import Main from "./component/Layout/Main.jsx";
import Blog from "./component/Blog.jsx";
import Login from "./component/Login/Login.jsx";
import Register from "./component/Register/Register.jsx";
import AuthProvider from "./component/AuthProvider/AuthProvider.jsx";
import AllToys from "./component/AllToys/AllToys";
import AddAToy from "./component/Secret/AddAToy";
import MyToys from "./component/Secret/MyToys";
import PrivateRoute from "./component/PrivateRoute";
import AllToysDetails from "./component/AllToys/AllToysDetails";
import MyToysRow from "./component/Secret/MyToysRow";
import ErrorPage from "./component/ErrorPage";
import UpdateToy from "./component/Secret/UpdateToy";
import ReactTabsDetail from "./component/Share/Home/Home/ReactTabsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/allToys",
        element: <AllToys />,
      },
      {
        path: "/details",
        element: <AllToys />,
      },
      {
        path: "myToys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "addAToy",
        element: <AddAToy />,
      },
      {
        path: "toyDetails/:id",
        element: (
          <PrivateRoute>
            <ReactTabsDetail/>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-bazaar-server-ten.vercel.app/reactTabs/${params.id}`),
      },
      {
        path: "/allToyDetails/:id",
        element: (
          <PrivateRoute>
            <AllToysDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-bazaar-server-ten.vercel.app/allToys/${params.id}`),
      },
      {
        path: "/updateToy/:id",
        element: <UpdateToy />,
        loader: ({ params }) =>
          fetch(`https://toy-bazaar-server-ten.vercel.app/updateToys/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
