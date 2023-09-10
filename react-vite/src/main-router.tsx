import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";

const MainRouter: React.FC = () => {
    return (
      <Routes>
        {/* Main Page */}
        <Route path="/main" element={<Main/>}/>
        {/* About Page*/}
        <Route path="/about" element={<About/>}/>
        
  
        {/* Redirects */}
        <Route
          path={"/create-project"}
          element={<Navigate to={"/main"} replace={true} />}
        />
      </Routes>
    );
  };
  
  export { MainRouter };