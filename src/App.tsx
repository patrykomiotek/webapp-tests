import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Text } from "@ui";
import "./App.css";
import { Generator } from "@components/Generator";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Generator />
    </>
  );
}

export default App;
