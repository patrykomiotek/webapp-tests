import { NavLinkProps, NavLink as RRDNavLink } from 'react-router-dom';

type Props = NavLinkProps;

export const NavLink = ({ children, to }: Props) => {
  return (
    <li className="mr-4">
      <RRDNavLink
        to={to}
        className={({ isActive }) => (isActive ? 'text-red-400' : 'dark:text-white')}
      >
        {children}
      </RRDNavLink>
    </li>
  );
};
