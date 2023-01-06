import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

// import reportWebVitals from './reportWebVitals';

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Mainrout from './Mainrout/Mainrout';
import { RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <React.StrictMode>
      <RouterProvider router={Mainrout} />
    </React.StrictMode>
{/* hi */}
    {/* <MainRoutes/> */}
    {/* <HeaderCompo/> */}
    {/* <ComponetExample /> */}
  </>
);
