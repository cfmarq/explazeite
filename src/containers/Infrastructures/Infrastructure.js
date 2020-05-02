import React from 'react';
import { UncontrolledCarousel, Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

import {cellar, mill} from './../../constants';

const Infrastructure = (props) => {

  var infra
  if (props.match.params.id === 'cellar') {
    infra = cellar;
  } else if (props.match.params.id === 'mill') {
    infra = mill;
  } else {
    props.history.push('/');
    return null
  }

  return (
    <div className="center-container container">
      <Row>
        <Col xs="12" sm="12" md="6">
          <div className="left-box">
            <h1><FormattedMessage id={infra.texts.title} /><br/>/ /</h1>
            {infra.texts.paragraphs.map(el =>{
              return <p><FormattedMessage id={el.text} /></p>
            })}
          </div>
        </Col>
        <Col sm="12" md="6" className="hidden-xs">
          <div className="no-padding" id="lagar">
            <img className="right-box" src="/images/lagar/olival.png" alt="" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="12" sm="12" md="12">
          <UncontrolledCarousel className="hidden-xs" items={infra.items} pause="false" />
          <UncontrolledCarousel className="visible-xs" items={infra.items_mobile} pause="false" />
        </Col>
      </Row>
    </div>
  )
}

export default Infrastructure;
