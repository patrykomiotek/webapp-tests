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
    const AIRTABLE_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const AIRTABLE_API_TOKEN = import.meta.env.VITE_API_TOKEN;

    const response = await fetch(`${AIRTABLE_BASE_URL}/files/${params.fileId}`, {
      method: 'get',
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_TOKEN}`,
      },
    });
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
