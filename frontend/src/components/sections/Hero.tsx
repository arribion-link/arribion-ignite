import { Link } from "react-router-dom"
const Hero = () => {
  return (
    <section className="call-to-action-section text-blue-200 font-bold">
      <div className="call-to-action-text-container">
        <h1>Master the Code, Build Your Future.</h1>
        <h2 className="text-green-800 font-medium ">
          Dive into our
          <span className="cta-highlight"> project-based courses</span> with
          <span className="cta-highlight"> deep explanation</span>
          <br /> and create
          <span className="cta-highlight"> real-world applications</span>
          {/* for a powerful portfolio. */}
        </h2>
        <button className="free-courses-btn">
          <Link
            to={"/dashboard"}
            className="free-coures-btn-link"
          >
            Get free courses
          </Link>
        </button>
        <button className="get-started-btn">
          <Link
            to={"/dashboard"}
            className="get-started-btn-link"
          >
            Get started
          </Link>
        </button>
      </div>
    </section>
  );
}

export default Hero
