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
          className="vertical-timeline-element--work no-margin"
          iconStyle={{ background: '#BC933A', color: '#fff' }}
          icon="1997"
        >
          <h3 className="vertical-timeline-element-title right">
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
          className="vertical-timeline-element--work no-margin"
        >
          <h3 className="vertical-timeline-element-title left">
            <FormattedMessage id="history.item2.title" />
          </h3>
          <div className="history-img-div">
            <div className="col-md-12 no-padding">
              <img className="history-img" src="/public/images/historia/crono_3.png" alt="" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work no-margin"
        >
          <h3 className="vertical-timeline-element-title right">
            <FormattedMessage id="history.item3.title" />
          </h3>
          <div className="history-img-div">
            <p><FormattedMessage id="history.item3.description" /></p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work no-margin"
          iconStyle={{ background: '#BC933A', color: '#fff' }}
          icon="2000"
        >
          <h3 className="vertical-timeline-element-title left">
            <FormattedMessage id="history.item4.title" />
          </h3>
          <div className="history-img-div">
            <div className="col-md-6 float-left no-padding">
              <img className="history-img" src="/public/images/historia/crono_4.png" alt="" />
            </div>
            <div className="col-md-6 float-right no-padding">
              <img className="history-img" src="/public/images/historia/crono_5.png" alt="" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work no-margin"
        >
          <h3 className="vertical-timeline-element-title right">
            <FormattedMessage id="history.item5.title" />
          </h3>
          <div className="history-img-div">
            <div className="col-md-12 no-padding">
              <img className="history-img" src="/public/images/historia/crono_6.png" alt="" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work no-margin"
          iconStyle={{ background: '#BC933A', color: '#fff' }}
          icon="2005"
        >
          <h3 className="vertical-timeline-element-title left">
            <FormattedMessage id="history.item6.title" />
          </h3>
          <div className="history-img-div">
            <p><FormattedMessage id="history.item6.description" /></p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work no-margin"
          iconStyle={{ background: '#BC933A', color: '#fff' }}
          icon="2006"
        >
          <h3 className="vertical-timeline-element-title right">
            <FormattedMessage id="history.item7.title" />
          </h3>
          <div className="history-img-div">
            <div className="col-md-12 no-padding">
              <img className="history-img" src="/public/images/historia/crono_7.png" alt="" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work no-margin"
        >
          <h3 className="vertical-timeline-element-title left">
            <FormattedMessage id="history.item8.title" />
          </h3>
          <div className="history-img-div">
            <p><FormattedMessage id="history.item8.description" /></p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work no-margin"
          iconStyle={{ background: '#BC933A', color: '#fff' }}
          icon="2010"
        >
          <h3 className="vertical-timeline-element-title right">
            <FormattedMessage id="history.item9.title" />
          </h3>
          <div className="history-img-div">
            <div className="col-md-12 no-padding">
              <img className="history-img" src="/public/images/historia/crono_8.png" alt="" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work no-margin"
          iconStyle={{ background: '#BC933A', color: '#fff' }}
          icon="2011"
        >
          <h3 className="vertical-timeline-element-title left">
            <FormattedMessage id="history.item10.title" />
          </h3>
          <div className="history-img-div">
            <p><FormattedMessage id="history.item10.description" /></p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work no-margin"
        >
          <h3 className="vertical-timeline-element-title right">
            <FormattedMessage id="history.item11.title" />
          </h3>
          <div className="history-img-div">
            <div className="col-md-12 no-padding">
              <img className="history-img" src="/public/images/historia/crono_9.png" alt="" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work no-margin"
          iconStyle={{ background: '#BC933A', color: '#fff' }}
          icon="2015"
        >
          <h3 className="vertical-timeline-element-title left">
            <FormattedMessage id="history.item12.title" />
          </h3>
          <div className="history-img-div">
            <div className="col-md-12 no-padding">
              <img className="history-img" src="/public/images/historia/crono_10.png" alt="" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work no-margin"
        >
          <h3 className="vertical-timeline-element-title right">
            <FormattedMessage id="history.item13.title" />
          </h3>
          <div className="history-img-div">
            <p><FormattedMessage id="history.item13.description" /></p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work no-margin"
          iconStyle={{ background: '#BC933A', color: '#fff' }}
          icon="2016"
        >
          <h3 className="vertical-timeline-element-title left">
            <FormattedMessage id="history.item14.title" />
          </h3>
          <div className="history-img-div">
            <p><FormattedMessage id="history.item14.description" /></p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work no-margin"
          iconStyle={{ background: '#BC933A', color: '#fff' }}
          icon="2017"
        >
          <h3 className="vertical-timeline-element-title right">
            <FormattedMessage id="history.item15.title" />
          </h3>
          <div className="history-img-div">
            <div className="col-md-12 no-padding">
              <img className="history-img" src="/public/images/historia/crono_11.png" alt="" />
            </div>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <div className="col-md-12 center">
        <h3 className="light">
          <FormattedMessage id="history.end.label.l1" />
          <br/>
          <FormattedMessage id="history.end.label.l2" />
        </h3>
      </div>
    </div>
  )
}

export default History;
