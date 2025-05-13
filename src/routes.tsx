import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from '@pages/HomePage';
import { Layout } from './components/Layout';
import FilesList from '@components/FilesList';
import FileDetails from '@components/FileDetails';

type Route = Record<
  string,
  {
    path: string;
    title: string;
    dynamicPath?: (id: string) => string;
  }
>;

export const Route: Route = {
  HOME: {
    path: '/',
    title: 'Home',
  },
  FILES_LIST: {
    path: '/files',
    title: 'Files',
  },
  FILE_DETAILS: {
    path: '/files/:fileId',
    title: 'File details',
  },
} as const;

export const router = createBrowserRouter([
  {
    path: Route.HOME.path,
    element: <Layout />,
    children: [
      {
        path: Route.HOME.path,
        element: <HomePage />,
      },
      {
        path: Route.HOME.path,
        element: <HomePage />,
      },
      {
        path: Route.FILES_LIST.path,
        element: <FilesList />,
      },
      {
        path: Route.FILE_DETAILS.path,
        element: <FileDetails />,
      },
    ],
  },
]);
