import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from 'reactstrap';
import { UncontrolledCarousel, Row, Col } from 'reactstrap';
import {Link, withRouter} from 'react-router-dom';
import {featured} from './../../constants';

const FeaturedItem = (props) => {

  if(featured[props.match.params.id-1] === undefined) {
    props.history.push('/');
    return null
  }
  return (
    <div className="center-container container">
      <Row>
        <Col xs="12" sm="12" md="12">
          <div className="no-padding">
            <h1><FormattedMessage id={featured[props.match.params.id-1].imgLabel} /></h1>
            <h3>/ /</h3>
            <br/>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="12" sm="8" md="8">
          <div className="featured-item__inner-box">
            <UncontrolledCarousel items={featured[props.match.params.id-1].images} pause="false" />
          </div>
        </Col>
        <Col xs="12" sm="4" md="4">
          <div className="featured__inner-box">
            <div className="featured-borderbox">
              <div>
                <h3><FormattedMessage id="featured.item.social" /></h3>
              </div>
              <div>
                <a href="https://www.facebook.com/explazeite/" target="_blank">
                  <img alt="facebook" className="social_ico" src="/images/fb_ico.png" height="35px" />
                </a>
                <a href="https://www.instagram.com/explazeite/" target="_blank">
                  <img alt="instagram" className="social_ico" src="/images/insta_ico.png" height="35px" />
                </a>
              </div>
            </div>
            <div>
              <Link to="/featured">
                <Button className="btn-gold featured-btn">
                  <FormattedMessage id="buttons.back" />
                </Button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs="12" sm="12" md="12">
          <div className="featured-item__description">
            <h2 className="subheader">
              <FormattedMessage id={featured[props.match.params.id-1].subtitle} />
            </h2>
            {featured[props.match.params.id-1].paragraphs.map(el => {
              return (<p><FormattedMessage id={el.text} /></p>)
            })}
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default withRouter(FeaturedItem);
