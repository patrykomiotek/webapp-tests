import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; //https://www.npmjs.com/package/uuid/v/7.0.3
import { Button, Text } from "@ui";

export const Generator = () => {
  const [keyGenerated, setKeyGenerated] = useState(uuidv4());

  const generateNewKey = (): void => {
    const newGenKey: string = uuidv4(); // Gen
    setKeyGenerated(newGenKey);
  };

  return (
    <div>
      <Button onClick={() => generateNewKey()}>Generate</Button>
      <hr />
      <Text>{keyGenerated}</Text>
    </div>
  );
};
