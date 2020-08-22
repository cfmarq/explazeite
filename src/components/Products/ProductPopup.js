import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setCart} from './../../actions';
import {withRouter} from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Modal, ModalHeader, ModalBody, Row, Col, Input, Button } from 'reactstrap';

class ProductPopup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      quantity: 1
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  addToCart = () => {
    var cart = this.props.cart !== null && this.props.cart.length > 0 ? this.props.cart : [];
    if (cart.length > 0) {
      console.log(cart);
      var found = false;
      cart.forEach(el => {
        if (el.shortName === this.props.product.shortName) {
          el.quantity += this.state.quantity
          found = true;
        }
      })
      if (!found) {
        cart.push({shortName: this.props.product.shortName, popupTitle: this.props.product.popupTitle, popupSubtitle: this.props.product.popupSubtitle, quantity: this.state.quantity, price: this.props.product.price, weight: this.props.product.weight, imgTN: this.props.product.imgTN})
      }
    } else {
      cart.push({shortName: this.props.product.shortName, popupTitle: this.props.product.popupTitle, popupSubtitle: this.props.product.popupSubtitle, quantity: this.state.quantity, price: this.props.product.price, weight: this.props.product.weight, imgTN: this.props.product.imgTN})
    }

    this.props.setCart(cart)
    this.toggle()
    //window.location.reload()
  }

  render (){

    return (
      <Col xs="12" sm="6" md="4" className="inline-block no-padding">
        <div className="product__outer-div" key={this.props.product.id} onClick={this.toggle}>
          <div className="product-div">
            <div className="product__upper-div">
              <img src={this.props.product.imgTN} alt=""  />
            </div>
            <div className="product__label-div">
              {this.props.product.price !== undefined && <span className="bold">{this.props.product.price} € / / </span> }<FormattedMessage id={this.props.product.label} />
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
                      {this.props.product.price !== undefined &&
                        <>
                          <div className="add_item_div">
                            <div className="price_div">
                              {this.props.product.price}€
                            </div>
                            <div className="price_label_div">
                              <FormattedMessage id="products.warning" />
                            </div>
                          </div>
                          <div className="add_item_div">
                            <Input className="quantity_input" value={this.state.quantity} onChange={e => this.setState({quantity: e.target.value})} min={1} max={100} type="number" step="1" />
                            <Button className="btn-gold btn_add" onClick={this.addToCart}>
                              <FormattedMessage id="buttons.add" />
                            </Button>
                          </div>
                        </>
                      }
                    </div>
                  </Col>
                </Row>
              </ModalBody>
            </Modal>
          </div>
        </div>
      </Col>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    locale: state.lang.locale,
    messages: state.lang.messages,
    cart: state.store.cart
  };
};

export default withRouter(connect(mapStateToProps, {setCart})(ProductPopup));
