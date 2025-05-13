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
const FilesList = () => {
  const [files, setFiles] = useState<Files>();
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
      const filesData = await fetchFiles();
      setFiles(filesData);
    };
    load();
  }, []);

  return (
    <div>
      {files?.records[0]?.fields.name}
      {files?.records?.map((item, i) => {
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
