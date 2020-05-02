import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Row, Col } from 'reactstrap';
import {withRouter} from 'react-router-dom';
import {featured} from './../../constants';

const Featured = (props) => {

  return (
    <div className="center-container container">
      <Row>
        <Col xs="12" sm="12" md="12">
          <div className="no-padding">
            <h1>
              <FormattedMessage id="featured.title" />
            </h1>
            <h3>/ /</h3>
            <br/>
          </div>
        </Col>
      </Row>
      <Row>
      { featured.map(el => {
        return (<Col xs="12" sm="6" md="4">
          <div className="featured__outer-box">
            <div className="featured__inner-box">
              <div className="featured__img-div">
                <img className="featured__img" src={el.images[0].src} alt="" />
              </div>
              <div className="featured__label">
                <div className="col-md-8 featured__label--text">
                  <p className="subtitle"><FormattedMessage id={el.imgLabel} /></p>
                </div>
                <div className="col-md-4 featured__label--button">
                  <Button className="btn-gold" onClick={() => props.history.push({pathname: `/featured/${el.id}`})}>
                    <FormattedMessage id="buttons.read-more" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Col>)
        })
      }
      </Row>
    </div>
  )
}

export default withRouter(Featured);
