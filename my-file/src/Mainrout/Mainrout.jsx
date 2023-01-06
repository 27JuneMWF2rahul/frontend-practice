import React, { Component, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage'
import Examples from './Examples.jsx'
// import PageNotfound from './PageNotfound'
import Features from './Features'
import Pricing from './Pricing.jsx'
import About from './About.jsx'
// import WelcomeToClassCompo from './Component/ClassComponent/01WelcomeToClassCompo'
// import WelcomeToClassCompo from './Component/ClassComponent/01WelcomeToClassCompo'
// import ClassComponent from "./Component/ClassComponent/classRoutes.jsx"

const ClassComponent = React.lazy(() => import('./Component/ClassComponent/classRoutes'))
const Functionalcomponet = React.lazy(() => import('./Component/functionalComponet/FunctionalRoute'))
const Mainrout = createBrowserRouter([
  {
    path: "/",
    // path:  "/Home",
    element:<HomePage></HomePage>,
    // errorElement:<PageNotfound/>
  },{
    // path: "/",
    path:  "/Home",
    element:<HomePage></HomePage>,
    // errorElement:<PageNotfound/>
  },{
        path: "/Features",
        element: <Features/>
      },{
        path: "/Pricing",
        element: <Pricing/>
      },{
        path: "/about",
        element: <About/>
      },
      {
        path: "/examples",
        element: <Examples/>,
        children: [
          {
            path: "classcomponent/*",
            element:<Suspense fallback={<h2>Loding...</h2>}> <ClassComponent /></Suspense>,
          },
          {
            path: "functionalcomponet/*",
            element:<Suspense fallback={<h2>Loding...</h2>}> <Functionalcomponet /></Suspense>,
          },
        ],
      }
  ]);

export default Mainrout;