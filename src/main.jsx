import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Projects from './Components/Projects.jsx';
import Blog from './Components/Blog.jsx';
import Meetups from './Components/Meetups.jsx';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'Home',
        element: <Home />,
      },
      {
        path: 'Projects',
        element: <Projects />,
      },
      {
        path: 'Contact',
        element: <></>,
      },
      {
        path: 'Blogs',
        element: <Blog />,
      },
      {
        path: 'Meetups',
        element: <Meetups />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={routers} />
);
