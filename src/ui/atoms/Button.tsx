import { ComponentPropsWithoutRef } from 'react';

type Props = ComponentPropsWithoutRef<'button'> & {};

export const Button = ({ children, ...rest }: Props) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      {...rest}
    >
      {children}
    </button>
  );
};
