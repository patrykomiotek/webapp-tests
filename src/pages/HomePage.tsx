import { Helmet } from 'react-helmet-async';

import { Route } from '../routes';

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>{Route.HOME.title}</title>
      </Helmet>
      <div>
        <h1 className="text-3xl my-2">Hello from home</h1>
      </div>
    </>
  );
};
