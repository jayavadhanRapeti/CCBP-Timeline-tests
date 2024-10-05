// Write your code here

import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'

import CourseTimelineCard from '../CourseTimelineCard'

import './index.css'

const TimelineView = props => {
  // eslint-disable-next-line
  const {timelineItemsList} = props

  const renderTimeLine = data => {
    if (data.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={data.id} projectDetails={data} />
    }
    return <CourseTimelineCard key={data.id} courseDetails={data} />
  }

  return (
    <div className="timelineView_container">
      <h1 className="timelineView_container_heading">
        MY JOURNEY OF
        <span className="timelineView_container_sub_heading"> CCBP 4.0</span>
      </h1>
      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
        {timelineItemsList.map(eachItem => renderTimeLine(eachItem))}
      </Chrono>
    </div>
  )
}

export default TimelineView
