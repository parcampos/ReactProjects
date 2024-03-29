import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home';
import Contact from './routes/Contact';
import ErroePage from './routes/ErroePage';

/* const router = createBrowserRouter([
  {
    path:"/", element:<Home />,
  },
  {
    path:"Contact",element:<Contact />,
  },
]) */

const router = createBrowserRouter([
  {
    path:"/", element:<App />,
    errorElement:<ErroePage />,
    children: [
      {
        path:"/", element: <Home />,
      },
      {
        path:"contact", element: <Contact />,
      },

    ]
  },
 
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
