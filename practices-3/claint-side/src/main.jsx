import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Users from './Users';
import Edit_user from './Edit_user';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/users',
    element: <Users />,
    loader: () => fetch('http://localhost:5000/users'),
  },
  {
    path: '/edit-user/:id',
    element: <Edit_user />,
    loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
