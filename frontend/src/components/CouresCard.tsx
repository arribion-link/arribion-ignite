type couresCardProp = {
    courseThumbnailURL:string,
    courseTitle:string,
    courseDescription:string,
    courseDuration:string
}

const CouresCard = 
({courseThumbnailURL, courseTitle, courseDuration, courseDescription}:couresCardProp) => {
  return (
    <div className='course-card'>
      <div>
        <img 
            src={courseThumbnailURL}
            alt={courseTitle}
            className='course-thumbnail'
        />
        <div className="thumbnail-overlay">
          Liked
        </div>
      </div>
      <div>
        <p>{courseDuration}</p>
        <p>{courseDescription}</p>
        <button>Get Started</button>
      </div>
    </div>
  )
}

export default CouresCard
