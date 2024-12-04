import { type ComponentProps, forwardRef, useId } from 'react';

type InputProps = ComponentProps<'input'> & {
  label: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const id = useId();
  return (
    <div className="my-4">
      <label htmlFor={id}>{props.label}</label>
      <input id={id} {...props} ref={ref} className="bg-black text-white" />
    </div>
  );
});
