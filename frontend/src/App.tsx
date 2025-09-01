import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Courses from "./pages/Courses";

import {  Route, Routes } from "react-router";

function App() {
  return (<>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/courses" element={<Courses />}/>
      </Routes>
    
  </>
  );
}

export default App
