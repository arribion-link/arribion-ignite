import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Courses from "./pages/Courses";

import { Route, Routes } from "react-router";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/courses" element={<Courses />} />
       </Routes>
      <Footer/>
    </>
  );
}

export default App
