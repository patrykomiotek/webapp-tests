import { ComponentPropsWithoutRef, useId } from 'react';

type Props = ComponentPropsWithoutRef<'input'> & {
  label: string;
};

export const Input = ({ label, className, ...rest }: Props) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} className={`my-btn ${className}`} {...rest} />
    </div>
  );
};
