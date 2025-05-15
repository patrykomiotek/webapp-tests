// copy paste from Slack

import { Button } from '@atoms/Button';
import { useState } from 'react';

type PostHeaders = {
  Authorization: `Bearer ${string}`;
  'Content-Type': 'application/json';
};

const inputClass =
  'block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6';

const FileForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formElements = event.currentTarget.elements as HTMLFormControlsCollection;
    const name = (formElements[0] as HTMLInputElement).value;
    const description = (formElements[1] as HTMLInputElement).value;
    const type = (formElements[2] as HTMLInputElement).value;

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const API_TOKEN = import.meta.env.VITE_API_TOKEN;

    const headers: PostHeaders = {
      Authorization: `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
    };

    fetch(`${API_BASE_URL}/files`, {
      method: 'post',
      headers,
      body: JSON.stringify({
        records: [
          {
            fields: {
              name,
              description,
              type,
            },
          },
        ],
      }),
    }).then(() => setIsSuccess(true));
  };

  return (
    <>
      {isSuccess && <p>Form sent successfully</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" title="name" className={inputClass} />

        <br />

        <label htmlFor="description">Description</label>
        <input type="text" title="description" className={inputClass} />

        <br />

        <label htmlFor="type">Type</label>
        <input type="text" title="type" className={inputClass} />

        <br />

        <Button type="submit">Send</Button>
      </form>
    </>
  );
};

export default FileForm;
