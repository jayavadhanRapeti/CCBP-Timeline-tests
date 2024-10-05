// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, duration, description, tagsList} = courseDetails
  return (
    <div className="courseTimeLine_container">
      <div className="course_heading_container">
        <h1 className="course_heading">{courseTitle}</h1>
        <div className="duration_container">
          <AiFillClockCircle className="duration_logo" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="tags_container">
        {tagsList.map(eachTag => (
          <p className="tags" key={eachTag.id}>
            {eachTag.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
