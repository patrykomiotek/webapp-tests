import { FilesDto } from '@apptypes/dtos/Files.dto';
import { FilesList } from '@components/FilesList';
import { useEffect, useState } from 'react';

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
  const fetchFiles = async (): Promise<FilesDto> => {
    const response = await fetch('https://api.airtable.com/v0/appbOzKPuEebvDE0e/files', {
      method: 'get',
      headers: {
        Authorization:
          'Bearer patvjVDG4kA67qvMB.d403954180b077dcd0c0400be80fabd5654264488be1f0aef794dbffb352a0d6',
      },
    });
    console.log(response);
    const data = await response.json();
    return data;
  };

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
      <FilesList files={status.data.records} />
    </div>
  );
};
