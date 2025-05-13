import { FilesDto } from '@apptypes/dtos/Files.dto';

export const fetchFiles = async (): Promise<FilesDto> => {
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
