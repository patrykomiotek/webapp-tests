import { Viewport } from '@components/Viewport';
import { AuthInfo } from '@features/products/components/Auth/AuthInfo';

export const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl my-2">Hello from home</h1>
      <AuthInfo />
      {/* <Viewport /> */}
      {/* <Generator /> */}
    </div>
  );
};
