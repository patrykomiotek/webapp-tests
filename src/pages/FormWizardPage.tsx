import { Helmet } from 'react-helmet-async';

import { Route } from '../routes';
import { FormWizard } from '@components/FormWizard/FormWizard';

export const FormWizardPage = () => {
  return (
    <>
      <Helmet>
        <title>{Route.AUTH_INFO.title}</title>
      </Helmet>
      <div>
        <h1>Form Wizard Page</h1>
        <FormWizard />
      </div>
    </>
  );
};
