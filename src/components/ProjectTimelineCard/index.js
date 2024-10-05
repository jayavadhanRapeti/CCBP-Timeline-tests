// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    duration,
    description,
    projectUrl,
  } = projectDetails
  return (
    <div className="projectTimeline_container">
      <img src={imageUrl} className="project_image" alt="project" />
      <div className="project_heading_container">
        <h1 className="project_heading">{projectTitle}</h1>
        <div className="duration_container">
          <AiFillCalendar className="duration_logo" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="project_description">{description}</p>
      <a href={projectUrl} className="project_link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
