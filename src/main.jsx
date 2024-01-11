import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Movie from './components/Movie/Movie'
import Layout from './components/Layout/Layout'
import MoviesList from './components/MoviesList.jsx'

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//createBrowserRouter permet de créer un tableau dans lequel on va pouvoir paramétrer nos routes
//RouterProvider permet d'englober notre application avec un ecouteur de routes

const routeur=createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [
    { index: true, element: < MoviesList />},
    { path: "/movie/:id", element: <Movie/> },
  ]
 },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routeur}/>
  </React.StrictMode>,
);
