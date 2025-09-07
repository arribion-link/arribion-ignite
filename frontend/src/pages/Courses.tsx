
const Courses = () => {
  return (
    <section className="courses-main-page">
      <div className="courses-header"></div>
      <div className="courses-main-container">
        <aside>
          <h1>
            Get What your looking for first <br />
            Filter Courses with ease!
          </h1>

          <h2>Programming Language</h2>
          <select name="" id="">
            <option value="javascript">Javascript</option>
            <option value="typescript">Typescript</option>
            <option value="java">Java</option>
            <option value="dart">Dart</option>
            <option value="python">Python</option>
          </select>
          <h2>FrameWorks & Libraries</h2>
          <select name="" id="">
            <option value="reactjs">React.js</option>
            <option value="nextjs">Next.js</option>
            <option value="astro">Astro</option>
            <option value="react-native">React Native(EXPO)</option>
            <option value="flutter">Flutter</option>
            <option value="springBoot">Spring Boot</option>
          </select>
          <h2>Developer role</h2>
          <select name="" id="">
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">FullStack</option>
          </select>
          <h2>Developer</h2>
          <select name="" id="">
            <option value="webdevelopment">Web development</option>
            <option value="mobiledevelopment">Mobile development</option>
            <option value=""></option>
          </select>
        </aside>
        <div className="courses-container">
          <input type="search" placeholder="Search for Courses..." />
        </div>
      </div>
    </section>
  );
}

export default Courses
