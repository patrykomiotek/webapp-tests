import { Helmet } from 'react-helmet-async';

import { Generator } from '@components/Generator';
import { Route } from '../routes';

export const GeneratorPage = () => {
  return (
    <>
      <Helmet>
        <title>{Route.GENERATOR.title}</title>
      </Helmet>
      <div>
        <h1>Generator Page</h1>
        <Generator />
      </div>
    </>
  );
};
