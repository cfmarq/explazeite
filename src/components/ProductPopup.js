import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
      <div className="product__button-div">
        <Button className="btn-gold btn-product" onClick={this.toggle}>
          <FormattedMessage id={this.props.product.btnLabel} />
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>
            <div className="col-md-4 popup__img-div">
              <img src={this.props.product.imgPP} alt=""  />
            </div>
            <div className="col-md-8 popup__text-div">
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
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ProductPopup;
