// copy paste from Slack
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface FileRecord {
  id: string;
  fields: Fields;
}
interface Fields {
  name: string;
  description: string;
  type: string;
}

const FileDetails = () => {
  const params = useParams();
  const [file, setFile] = useState<FileRecord>();
  const fetchFile = async (): Promise<FileRecord> => {
    const response = await fetch(
      `https://api.airtable.com/v0/appbOzKPuEebvDE0e/files/${params.fileId}`,
      {
        method: 'get',
        headers: {
          Authorization:
            'Bearer patvjVDG4kA67qvMB.d403954180b077dcd0c0400be80fabd5654264488be1f0aef794dbffb352a0d6',
        },
      },
    );
    console.log(response);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const load = async () => {
      const fileData = await fetchFile();
      setFile(fileData);
    };
    load();
  }, []);

  return (
    <div>
      {file && (
        <div>
          <p>{file.fields.name}</p>
          <p>{file.fields.description}</p>
        </div>
      )}
    </div>
  );
};
export default FileDetails;
