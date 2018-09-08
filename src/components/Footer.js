import React from 'react';
import { FormattedMessage } from 'react-intl';

const Footer= () => {
  return (
    <div className="footer__div">
		  <div className="container footer-display">

        <div className="col-sm-12 col-md-8 footer__div-left">
  				<span className="footer_regular">
            <FormattedMessage id="footer.feedback" />
          </span>
  				<br/>
  				<span className="footer_light">
            <FormattedMessage id="footer.contact" />
          </span>
  			</div>

  			<div className="col-sm-12 col-md-4 footer__div-right">
  				<div className="footer_div floating_margin_left">
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
  					<div className="float_right">
  						<img className="/public/footer_img" src="/public/images/footer/footer_selo.png" width="80px"/>
  					</div>
  				</div>
  				<div className="floating_margin_left mt20">
  					<span className="footer_copyright">
              <FormattedMessage id="footer.copyright" />
            </span>
  				</div>
  			</div>
  			<div className="col-md-12">&nbsp;</div>
  		</div>
  	</div>
  )
}

export default Footer;
