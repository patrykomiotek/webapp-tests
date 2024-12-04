import { FormEventHandler, useState, type ChangeEventHandler } from 'react';

export const RegistrationFormRefs = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [favLang, setFavLang] = useState("");
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    favLang: '',
  });

  // const handleSetFavLang: ChangeEventHandler<HTMLInputElement> = (event) => {
  //   setFavLang(event.target.value);
  // };
  // const handleSetEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
  //   setEmail(event.target.value);
  // };
  // const handleSetPassword: ChangeEventHandler<HTMLInputElement> = (event) => {
  //   setPassword(event.target.value);
  // };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setFormState({
      ...formState,
      [fieldName]: fieldValue,
    });
  };

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    console.log(formState.email);
    console.log(formState.password);
    console.log(formState.favLang);
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>
        E-mail: {formState.email}, password: {formState.password}
      </p>

      <div className="my-4">
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          className="bg-black text-white"
        />
      </div>
      <div className="my-4">
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={handleChange}
          className="bg-black text-white"
        />
      </div>
      <div className="my-4">
        <input
          name="favLang"
          value={formState.favLang}
          onChange={handleChange}
          className="bg-black text-white"
        />
      </div>
    </form>
  );
};
