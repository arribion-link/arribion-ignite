import Header from "../components/partials/Header"
import Footer from "../components/partials/Footer"
import Hero from "../components/sections/Hero"
import Blog from "../components/sections/Blog"
import Courses from "../components/sections/Courses"


const Home = () => {
    return (
      <>
        <div>
          <Header />
          <Hero />
          <Courses />
          <Blog />
          <Footer />
        </div>
        ;
      </>
    );
};

export default Home;
