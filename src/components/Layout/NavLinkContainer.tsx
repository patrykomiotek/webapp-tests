type Props = {
  children: React.ReactNode;
};

export const NavLinkContainer = ({ children }: Props) => {
  return (
    <nav>
      <ul className="flex mt-2">{children}</ul>
    </nav>
  );
};
