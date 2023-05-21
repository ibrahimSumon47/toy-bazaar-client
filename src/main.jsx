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
import Details from "./component/Share/Home/Details";
import AllToysDetails from "./component/AllToys/AllToysDetails";
import MyToysRow from "./component/Secret/MyToysRow";
import ErrorPage from "./component/ErrorPage";

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
        element: <AllToys />
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
        element: <PrivateRoute><Details /></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/reactTabs/${params.id}`),
      },
      {
        path:"/allToyDetails/:id",
        element: <PrivateRoute><AllToysDetails/></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/allToys/${params.id}`)
      },
      {
        path: "/updateToy/:id",
        element: <MyToysRow/>,
        loader: ({params})=> fetch(`http://localhost:5000/allToys/${params.id}`)
      },
      {
        path:"*",
        element: <ErrorPage/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
