import { useState } from "react";
import images from "../assets";

export default function About() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {" "}
      <h1>About</h1>
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={images.viteLogo} className="logo" alt="Vite logo" />
          </a>
          <img src={images.img2} alt="image2"></img>
          <img src={images.img3} alt="image3"></img>
          <a href="https://react.dev" target="_blank">
            <img
              src={images.reactLogo}
              className="logo react"
              alt="React logo"
            />
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
    </div>
  );
}
