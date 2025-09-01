import CouresCard from "../CouresCard.tsx"

const Courses = () => {
  return (
    <section className="courses-section">
      <div className="course-wrapper">
        <div>
          <h1 className="text-center">Featured Courses</h1>
          <div className="course-section-container">
            <CouresCard
              courseThumbnailURL="https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              courseTitle=""
              courseDescription=""
              courseDuration=""
            />
            <CouresCard
              courseThumbnailURL="https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              courseTitle=""
              courseDescription=""
              courseDuration=""
            />
            <CouresCard
              courseThumbnailURL="https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              courseTitle=""
              courseDescription=""
              courseDuration=""
            />
            <CouresCard
              courseThumbnailURL="https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              courseTitle=""
              courseDescription=""
              courseDuration=""
            />
            <CouresCard
              courseThumbnailURL="https://plus.unsplash.com/premium_photo-1685086785054-d047cdc0e525?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              courseTitle=""
              courseDescription=""
              courseDuration=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses
