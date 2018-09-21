import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const History = () => {
  return (
    <div className="center-container">
      <div className="col-md-12 center">
        <h3 className="light">A <span className="bold">Explazeite</span><br/>é uma empresa familiar</h3>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: '#BC933A', color: '#fff' }}
          icon="1997"
        >
          <h3 className="vertical-timeline-element-title">
            <FormattedMessage id="history.item1.title" />
          </h3>
          <div className="history-img-div">
            <div className="col-md-6 float-left no-padding">
              <img className="history-img" src="/public/images/historia/crono_1.png" alt="" />
            </div>
            <div className="col-md-6 float-right no-padding">
              <img className="history-img" src="/public/images/historia/crono_2.png" alt="" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: '#BC933A', color: '#fff' }}
          icon="2000"
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: '#BC933A', color: '#fff' }}
          icon="2005"
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
          <p>
            User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: '#BC933A', color: '#fff' }}
          icon="2010"
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: '#BC933A', color: '#fff' }}
          icon="2015"
        >
          <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>
            Strategy, Social Media
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: '#BC933A', color: '#fff' }}
          icon="2017"
        >
          <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>
            Creative Direction, User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <div className="col-md-12 center">
        <h3 className="light">Esperamos continuar<br/>a evoluir por muito mais anos</h3>
      </div>
    </div>
  )
}

export default History;
