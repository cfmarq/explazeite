import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';

class ProductPopup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render (){

    return (


      <Row>
        <Col xs="12" sm="6" md="4">
          <div className="product__outer-div" key={this.props.product.id} onClick={this.toggle}>
            <div className="product-div">
              <div className="product__upper-div">
                <img src={this.props.product.imgTN} alt=""  />
              </div>
              <div className="product__label-div">
                <FormattedMessage id={this.props.product.label} />
              </div>
              <div className="product__button-div">
                <FormattedMessage id={this.props.product.btnLabel} />
              </div>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}></ModalHeader>
                <ModalBody>
                  <Row>
                    <Col xs="4" sm="4" md="4">
                      <div className="popup__img-div">
                        <img src={this.props.product.imgPP} alt=""  />
                      </div>
                    </Col>
                    <Col xs="8" sm="8" md="8">
                      <div className="popup__text-div">
                        <div className="product__popup-header">
                          <h5 className="popup-h5"><FormattedMessage className="product__popup-title" id={this.props.product.popupTitle} /></h5>
                          <h6 className="popup-h6 light"><FormattedMessage className="product__popup-subtitle" id={this.props.product.popupSubtitle} /></h6>
                        </div>
                        <div className="product__popup-body">
                          <p className="popup-text bold"><FormattedMessage id={this.props.product.popupP1} /></p>
                          <p className="popup-text light"><FormattedMessage id={this.props.product.popupP2} /></p>
                          <p className="popup-text light"><FormattedMessage id={this.props.product.popupP3} /></p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </ModalBody>
              </Modal>
            </div>
          </div>
        </Col>
      </Row>


    );
  }
}

export default ProductPopup;
