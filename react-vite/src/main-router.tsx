import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import TodoPage from "./pages/TodoPage";
import Mui from "./pages/MuiPage";
import "./App.css";
import Api from "./pages/ApiPage";
import RouterPage from "./pages/RouterPage";


const MainRouter: React.FC = () => {
  return (
    <>
      <ul className="nav-bar">
        <li>
          <NavLink to="/main">Main</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/router">Router</NavLink>
        </li>
        <li>
          <NavLink to="/todo">Todo</NavLink>
        </li>
        <li>
          <NavLink to="/mui">MUI</NavLink>
        </li>        
        <li>
          <NavLink to="/api">API</NavLink>
        </li>
      </ul>
      <Routes>
        {/* Main Page */}
        <Route path="/main" element={<MainPage />} />
        {/* About Page*/}
        <Route path="/about" element={<AboutPage />} />
                {/* Router Page*/}
                <Route path="/router" element={<RouterPage />} />
        {/* Todo Page*/}
        <Route path="/todo" element={<TodoPage />} />
        {/* MUI Page*/}
        <Route path="/mui" element={<Mui />} />        
        {/* API Page*/}
        <Route path="/api" element={<Api />} />
        

        {/* Redirects */}
        <Route path={"/*"} element={<Navigate to={"/main"} replace={true} />} />
      </Routes>
    </>
  );
};

export { MainRouter };
