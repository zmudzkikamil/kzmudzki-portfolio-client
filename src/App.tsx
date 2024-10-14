import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { classNames } from "./utils/classNames";

function App() {
  const [count, setCount] = useState(0);
  const buttonStyles = classNames({
    "bg-black flex": true,
    "bg-black p-4": false,
  });
  console.log(buttonStyles);
  return (
    <>
      <div>
        <a
          href="https://vitejs.dev"
          target="_blank"
          rel="noreferrer"
          className=""
        >
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
