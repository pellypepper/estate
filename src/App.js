
import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./component/routes/route";
import React from 'react';
import Home from './page/home/home';
import Listing from './page/listing/listing';
import Rent from './page/listing/rent';
import About from './page/about/about';

function App() {
  const router = createBrowserRouter([
    {
      path: ROUTES.Home,
      element: <Home />
    },
    {
      path: ROUTES.Listing,
      element: <Listing />
    },
    {
      path: ROUTES.Rent,
      element: <Rent />
    },
    {
      path: ROUTES.About,
      element: <About />
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
