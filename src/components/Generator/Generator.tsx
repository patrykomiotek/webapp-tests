import { useState, type MouseEventHandler } from 'react';
import { v4 as uuidv4 } from 'uuid'; //https://www.npmjs.com/package/uuid/v/7.0.3

export const Generator = () => {
  const [keyGenerated, setKeyGenerated] = useState(uuidv4());

  const generateNewKey = (): void => {
    const newGenKey: string = uuidv4(); // Gen
    setKeyGenerated(newGenKey);
  };

  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
    generateNewKey();
  };

  const handleRootClick: MouseEventHandler<HTMLDivElement> = () => {
    // generateNewKey();
  };

  return (
    <div onClick={handleRootClick}>
      <button
        className="my-4 py-2 px-4 cursor-pointer text-md rounded-md transition-colors hover:opacity-85 bg-blue-500 text-white"
        onClick={handleButtonClick}
      >
        Generate
      </button>

      <p>{keyGenerated}</p>
    </div>
  );
};
