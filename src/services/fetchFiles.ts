import { FilesDto } from '@apptypes/dtos/Files.dto';

export const fetchFiles = async (): Promise<FilesDto> => {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const API_TOKEN = import.meta.env.VITE_API_TOKEN;

  const response = await fetch(`${API_BASE_URL}/files`, {
    method: 'get',
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  });
  console.log(response);
  const data = await response.json();
  return data;
};
