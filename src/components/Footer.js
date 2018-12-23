import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Row, Col } from 'reactstrap';

const Footer= () => {
  return (

    <div className="footer__div">
      <div className="container no-padding">
        <Row className="no-margin">
          <Col xs="12" sm="8" md="8">
            <div className="footer__div-left no-padding">
              <span className="footer_regular">
                <FormattedMessage id="footer.feedback" />
              </span>
              <br/>
              <span className="footer_light">
                <FormattedMessage id="footer.contact" />
              </span>
            </div>
          </Col>

          <Col xs="12" sm="4" md="4">
            <div className="footer__div-right no-padding">
              <div className="float-left">
                <span className="footer_regular">
                  <FormattedMessage id="footer.follow" />
                </span><br/>
                <a href="https://www.facebook.com/explazeite/" target="_blank">
                  <img className="footer_img" src="/public/images/footer/footer_face.png" height="35px" />
                </a>
                <a href="https://www.instagram.com/explazeite/" target="_blank">
                  <img className="footer_img" src="/public/images/footer/footer_insta.png" height="35px" />
                </a>
              </div>
              <div className="float_right right">
                <img className="footer_img" src="/public/images/footer/footer_selo.png" width="80px"/>
              </div>
              <div className="mt20 no-padding">
                <span className="footer_copyright">
                  <FormattedMessage id="footer.copyright" />
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Footer;
