import { Route } from '../../routes';
import { NavLink } from './NavLink';
import { NavLinkContainer } from './NavLinkContainer';

export const Menu = () => {
  return (
    <div className="pb-4 border-b-2 border-stone-900  dark:border-slate-500">
      <NavLinkContainer>
        <NavLink to={Route.HOME.path}>Home</NavLink>
        <NavLink to={Route.FILES_LIST.path}>Files</NavLink>
        <NavLink to={Route.ADD_FILE.path}>Add file</NavLink>
        <NavLink to={Route.GENERATOR.path}>Generator</NavLink>
        <NavLink to={Route.TODO_LIST.path}>Todos</NavLink>
        <NavLink to={Route.AUTH_INFO.path}>Auth info</NavLink>
        <NavLink to={Route.VIEWPORT.path}>Viewport</NavLink>
        <NavLink to={Route.CART.path}>Cart</NavLink>
      </NavLinkContainer>
    </div>
  );
};
