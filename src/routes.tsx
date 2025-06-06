import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from '@pages/HomePage';
import { Layout } from './components/Layout';
// import FilesList from '@components/FilesList';
import FileDetails from '@components/FileDetails';
import { FilesListPage } from '@pages/FilesListPage';
import { AuthInfoPage } from '@pages/AuthInfoPage';
import { GeneratorPage } from '@pages/GeneratorPage';
import { ViewportPage } from '@pages/ViewportPage';
import { TodoListPage } from '@pages/TodoListPage';
import { CartPage } from '@pages/CartPage';
import { AddFilePage } from '@pages/AddFilePage';
import { RegistrationFormPage } from '@pages/RegistrationFormPage';
import { FormWizardPage } from '@pages/FormWizardPage';

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
  ADD_FILE: {
    path: '/add-file',
    title: 'Add File',
  },
  FILE_DETAILS: {
    path: '/files/:fileId',
    title: 'File details',
  },
  GENERATOR: {
    path: '/generator',
    title: 'Generator',
  },
  AUTH_INFO: {
    path: '/auth/info',
    title: 'Auth Info',
  },
  TODO_LIST: {
    path: '/todos',
    title: 'Todo List',
  },
  VIEWPORT: {
    path: '/viewport',
    title: 'Viewport',
  },
  CART: {
    path: '/cart',
    title: 'Cart',
  },
  REGISTRATION_FORM: {
    path: '/registration',
    title: 'Registration Form',
  },
  FORM_WIZARD: {
    path: '/wizard',
    title: 'Registration Wizard',
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
        path: Route.FILES_LIST.path,
        element: <FilesListPage />,
      },
      {
        path: Route.FILE_DETAILS.path,
        element: <FileDetails />,
      },
      {
        path: Route.ADD_FILE.path,
        element: <AddFilePage />,
      },
      {
        path: Route.AUTH_INFO.path,
        element: <AuthInfoPage />,
      },
      {
        path: Route.GENERATOR.path,
        element: <GeneratorPage />,
      },
      {
        path: Route.VIEWPORT.path,
        element: <ViewportPage />,
      },
      {
        path: Route.TODO_LIST.path,
        element: <TodoListPage />,
      },
      {
        path: Route.CART.path,
        element: <CartPage />,
      },
      {
        path: Route.REGISTRATION_FORM.path,
        element: <RegistrationFormPage />,
      },
      {
        path: Route.FORM_WIZARD.path,
        element: <FormWizardPage />,
      },
    ],
  },
]);
