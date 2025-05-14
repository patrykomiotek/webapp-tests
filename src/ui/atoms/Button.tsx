import { ComponentPropsWithoutRef } from 'react';
import { classMerge } from 'ui/utils/cn';

type Props = ComponentPropsWithoutRef<'button'> & {};

export const Button = ({ children, className, ...rest }: Props) => {
  return (
    <button
      className={classMerge(
        'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
