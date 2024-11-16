import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import  { ROUTES } from "./component/header/header";

import React from 'react';
import Home from './page/home/home';
import Listing from './page/listing/listing';
import Rent from './page/listing/rent';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: ROUTES.Home,
        element: <Home />
      },
    
      {
        path: ROUTES.Listing,
        element: <Listing/>
      },
      {
        path: ROUTES.Rent,
        element: <Rent/>
      }
    ]
  );
  return (
    <div className="App">
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
