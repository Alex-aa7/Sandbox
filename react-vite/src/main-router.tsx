import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import TodoPage from "./pages/TodoPage";

const MainRouter: React.FC = () => {
    return (
      <>
      <ul>
         <li><NavLink to='/main'>Main</NavLink></li>
         <li><NavLink to='/about'>About</NavLink></li>
         <li><NavLink to='/todo'>Todo</NavLink></li>
      </ul>
      <Routes>
        {/* Main Page */}
        <Route path="/main" element={<MainPage/>}/>
        {/* About Page*/}
        <Route path="/about" element={<AboutPage/>}/> 
        {/* Todo Page*/}
        <Route path="/todo" element={<TodoPage/>}/>
        
  
        {/* Redirects */}
        <Route
          path={"/*"}
          element={<Navigate to={"/main"} replace={true} />}
        />
      </Routes>
      </>
    );
  };
  
  export { MainRouter };