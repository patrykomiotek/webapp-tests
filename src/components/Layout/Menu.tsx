import { NavLink } from 'react-router-dom';

import { Route } from '../../routes';

export const Menu = () => {
  return (
    <div className="pb-4 border-b-2 border-stone-900  dark:border-slate-500">
      <nav>
        <ul className="flex mt-2">
          <li className="mr-4">
            <NavLink
              to={Route.HOME.path}
              className={({ isActive }) => (isActive ? 'text-red-400' : 'dark:text-white')}
            >
              Home
            </NavLink>
          </li>
          <li className="mr-4">
            <NavLink
              to={Route.FILES_LIST.path}
              className={({ isActive }) => (isActive ? 'text-red-400' : 'dark:text-white')}
            >
              Files
            </NavLink>
          </li>
          <li className="mr-4">
            <NavLink
              to={Route.ADD_FILE.path}
              className={({ isActive }) => (isActive ? 'text-red-400' : 'dark:text-white')}
            >
              Add file
            </NavLink>
          </li>
          <li className="mr-4">
            <NavLink
              to={Route.GENERATOR.path}
              className={({ isActive }) => (isActive ? 'text-red-400' : 'dark:text-white')}
            >
              Generator
            </NavLink>
          </li>
          <li className="mr-4">
            <NavLink
              to={Route.TODO_LIST.path}
              className={({ isActive }) => (isActive ? 'text-red-400' : 'dark:text-white')}
            >
              Todos
            </NavLink>
          </li>
          <li className="mr-4">
            <NavLink
              to={Route.AUTH_INFO.path}
              className={({ isActive }) => (isActive ? 'text-red-400' : 'dark:text-white')}
            >
              Auth info
            </NavLink>
          </li>
          <li className="mr-4">
            <NavLink
              to={Route.VIEWPORT.path}
              className={({ isActive }) => (isActive ? 'text-red-400' : 'dark:text-white')}
            >
              Viewport
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
