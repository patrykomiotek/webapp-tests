import { Helmet } from 'react-helmet-async';

import { AuthInfo } from '@components/Auth/AuthInfo';
import { Route } from '../routes';

export const AuthInfoPage = () => {
  return (
    <>
      <Helmet>
        <title>{Route.AUTH_INFO.title}</title>
      </Helmet>
      <div>
        <h1>Auth Info Page</h1>
        <AuthInfo />
      </div>
    </>
  );
};
