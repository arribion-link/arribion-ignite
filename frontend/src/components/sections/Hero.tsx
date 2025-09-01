
const Hero = () => {
  return (
   <section className="call-to-action-section text-blue-100 font-bold">
        <div className="call-to-action-text-container">
            <h1>Master the Code, Build Your Future.</h1>
            <h2>
               Dive into our   
               <span className="cta-highlight"> project-based courses</span> with
               <span className="cta-highlight"> deep explanation</span><br /> and create 
               <span className="cta-highlight"> real-world applications</span> 
               {/* for a powerful portfolio. */}
            </h2>
            <button className="free-courses-btn">Get Free Courses</button>
            <button className="get-started-btn">Get Started</button>
        </div>
   </section>
  )
}

export default Hero
