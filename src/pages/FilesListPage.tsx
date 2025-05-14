import { useEffect, useState } from 'react';

import { FilesDto } from '@apptypes/dtos/Files.dto';
import { FilesList } from '@components/FilesList';
import { fetchFiles } from '@services/fetchFiles';

type Status =
  | {
      // pending
      isLoading: true;
      isError: false;
      data: undefined;
    }
  | {
      // fulfilled
      isLoading: false;
      isError: false;
      data: FilesDto;
    }
  | {
      // rejected
      isLoading: false;
      isError: true;
      data: undefined;
    };

export const FilesListPage = () => {
  const [status, setStatus] = useState<Status>({
    isLoading: true,
    isError: false,
    data: undefined,
  });

  // export, mock

  useEffect(() => {
    const load = async () => {
      try {
        const filesData = await fetchFiles();
        setStatus({
          isLoading: false,
          isError: false,
          data: filesData,
        });
      } catch {
        setStatus({
          isLoading: false,
          isError: true,
          data: undefined,
        });
      }

      // setFiles(filesData);
    };
    load();
  }, []);

  if (status.isError) {
    return <h1>Files error</h1>;
  }

  if (status.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Files list</h1>
      {status.data.records.length && <FilesList files={status.data.records} />}
    </div>
  );
};
