import { Helmet } from 'react-helmet-async';

import { Route } from '../routes';
import FileForm from '@components/FileForm';

export const AddFilePage = () => {
  return (
    <>
      <Helmet>
        <title>{Route.ADD_FILE.title}</title>
      </Helmet>
      <div>
        <FileForm />
      </div>
    </>
  );
};
