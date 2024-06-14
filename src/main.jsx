import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import './index.css';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Github, { githubInfoLoader } from './components/Github/Github.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'github',
        element: <Github />,
        loader: githubInfoLoader,
      },
      {
        path: 'github/:userid',
        element: <Github />,
        loader: githubInfoLoader,
      },
      {
        path: '*',
        element: <div>Not Found</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
