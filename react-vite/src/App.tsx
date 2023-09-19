import { BrowserRouter } from "react-router-dom";
import { MainRouter } from "./main-router";
import "./App.css";


function App() {
 

  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
