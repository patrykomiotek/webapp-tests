import { type RegistrationFromData } from '@pages/Home';
import { Button, Input } from '@ui';
import { FormEventHandler, useState, type ChangeEventHandler } from 'react';

interface Props {
  onSubmit: (data: RegistrationFromData) => void;
}

export const RegistrationFormState = ({ onSubmit }: Props) => {
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

    // console.log(formState.email);
    // console.log(formState.password);
    // console.log(formState.favLang);
    onSubmit({
      email: formState.email,
      password: formState.password,
      favLang: formState.favLang,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>
        E-mail: {formState.email}, password: {formState.password}
      </p>

      <Input
        label="E-mail"
        value={formState.email}
        onChange={handleChange}
        // type="email"
        name="email"
      />
      <Input
        label="Password"
        value={formState.password}
        onChange={handleChange}
        type="password"
        name="password"
      />
      <Input label="Language" value={formState.favLang} onChange={handleChange} name="favLang" />

      <div>
        <Button type="submit">Send</Button>
      </div>
    </form>
  );
};
