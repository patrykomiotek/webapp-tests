// copy paste from Slack
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
interface Fields {
  name: string;
  description: string;
  type: string;
}
interface Records {
  id: string;
  fields: Fields;
}
interface Files {
  records: Records[];
}

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
      data: Files;
    }
  | {
      // rejected
      isLoading: false;
      isError: true;
      data: undefined;
    };

const FilesList = () => {
  const [status, setStatus] = useState<Status>({
    isLoading: true,
    isError: false,
    data: undefined,
  });
  // const [files, setFiles] = useState<Files>();

  // export, mock
  const fetchFiles = async (): Promise<Files> => {
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
      {status.data?.records[0]?.fields.name}
      {status.data?.records?.map((item, i) => {
        return (
          <div>
            <Link to={`/files/${item.id}`} key={item.id}>
              {item.fields.name} -{item.fields.description}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default FilesList;
