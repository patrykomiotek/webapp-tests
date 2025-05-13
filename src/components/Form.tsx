// copy paste from Slack
const Form = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formElements = event.currentTarget.elements as HTMLFormControlsCollection;
    const name = (formElements[0] as HTMLInputElement).value;
    const description = (formElements[1] as HTMLInputElement).value;
    const type = (formElements[2] as HTMLInputElement).value;

    fetch('https://api.airtable.com/v0/appbOzKPuEebvDE0e/files', {
      method: 'post',
      headers: new Headers({
        Authorization:
          'Bearer patvjVDG4kA67qvMB.d403954180b077dcd0c0400be80fabd5654264488be1f0aef794dbffb352a0d6',
        'Content-Type': 'application/json',
      }),
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
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" title="name" />

      <br />

      <label htmlFor="description">Description</label>
      <input type="text" title="description" />

      <br />

      <label htmlFor="type">Type</label>
      <input type="text" title="type" />

      <br />

      <input type="submit" value="submit" />
    </form>
  );
};

export default Form;
