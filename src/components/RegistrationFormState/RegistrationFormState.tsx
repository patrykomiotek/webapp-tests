import {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useCallback,
  useState,
  type ChangeEventHandler,
} from "react";

export const RegistrationFormState = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [favLang, setFavLang] = useState("");

  const handleSetFavLang: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFavLang(event.target.value);
  };
  const handleSetEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };
  const handleSetPassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    console.log(email);
    console.log(password);
    console.log(favLang);
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>
        E-mail: {email}, password: {password}
      </p>

      <div className="my-4">
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleSetEmail}
          className="bg-black text-white"
        />
      </div>
      <div className="my-4">
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleSetPassword}
          className="bg-black text-white"
        />
      </div>
      <div className="my-4">
        <input
          name="favoriteLang"
          value={favLang}
          onChange={handleSetFavLang}
          className="bg-black text-white"
        />
      </div>
    </form>
  );
};
