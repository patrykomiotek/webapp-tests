import { Viewport } from '@components/Viewport';
import { Helmet } from 'react-helmet-async';

import { Route } from '../routes';

export const ViewportPage = () => {
  return (
    <>
      <Helmet>
        <title>{Route.VIEWPORT.title}</title>
      </Helmet>
      <div>
        <h1>Viewport Page</h1>
        <Viewport />
      </div>
    </>
  );
};
