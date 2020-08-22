import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setCart} from './../../actions';
import {withRouter} from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Row, Col, Input, Button, Label } from 'reactstrap';

class Cart extends Component {

  state = {
    modal: false,
    subTotalPrice: 0,
    shippingPrice: 0
  };

  clearCart = () => {
    console.log("clear");
    this.props.setCart(null)
    window.location.reload()
  }

  removeFromCart = (shortName) => {
    console.log(this.props.cart);
    var cart = this.props.cart !== null && this.props.cart.length > 0 ? this.props.cart : [];
    var filtered = [];
    cart.forEach(el => {
      if (el.shortName === shortName) {
        filtered = cart.filter(e => e.shortName!==shortName);
      }
    })
    console.log(filtered);
    this.props.setCart(filtered)
  }

  buildRows = () => {
    if (!this.props.cart) {
      return (
        <Row className="tableRow">
          <Col xs="12" sm="12" md="12">
            Não existem produtos no carrinho!
          </Col>
        </Row>
      )
    } else {
      const rows = this.props.cart.map( el => {
        return (
          <Row className="tableRow" key={el.index}>
            <Col xs="1" sm="1" md="1">
              <img className="cart_thumbnail" src={el.imgTN} alt=""  />
            </Col>
            <Col xs="5" sm="5" md="5">
              <FormattedMessage id={el.popupTitle} /><br/>
              <span className="light"><FormattedMessage id={el.popupSubtitle} /></span>
            </Col>
            <Col xs="2" sm="2" md="2">
              <span className="light">{el.price.toFixed(2)} €</span>
            </Col>
            <Col xs="2" sm="2" md="2">
              <span className="light">{el.quantity}</span>
            </Col>
            <Col xs="1" sm="1" md="1">
              <span className="light">{(el.price*el.quantity).toFixed(2)} €</span>
            </Col>
            <Col xs="1" sm="1" md="1" className="right">
              <span className="text-link" onClick={() => this.removeFromCart(el.shortName)}>x</span>
            </Col>
          </Row>
        )
      })
      return rows
    }
  }

  render (){
    var totalWeight = 0;
    var subTotalPrice = 0;
    if (this.props.cart) {
      this.props.cart.forEach(el => {
        var partialWeight = el.quantity*el.weight;
        totalWeight+=partialWeight;
        subTotalPrice = subTotalPrice+(el.price*el.quantity)
      })
    }

    var shipping24 = 0
    var shipping48 = 0
    if (totalWeight <= 2000) {
      shipping24 = 4.40;
      shipping48 = 3.20;
    } else if(totalWeight > 2000 && totalWeight <=5000) {
      shipping24 = 4.60;
      shipping48 = 4.00;
    } else if(totalWeight > 5000 && totalWeight <=10000) {
      shipping24 = 4.80;
      shipping48 = 4.60;
    } else if(totalWeight > 10000 && totalWeight <=15000) {
      shipping24 = 5.70;
      shipping48 = 5.20;
    } else if(totalWeight > 15000 && totalWeight <=20000) {
      shipping24 = 6.40;
      shipping48 = 6.00;
    } else if(totalWeight > 20000 && totalWeight <=30000) {
      shipping24 = 7.70;
      shipping48 = 7.10;
    }

    return (
      <div className="container center-container">
        <Row className="row-spacing">
          <Col xs="12" sm="12" md="12">
            <h2><FormattedMessage id="cart.cart" /></h2>
            <Row className="tableHeader">
              <Col xs="1" sm="1" md="1">
                &nbsp;
              </Col>
              <Col xs="5" sm="5" md="5">
                <FormattedMessage id="cart.products.product" />
              </Col>
              <Col xs="2" sm="2" md="2">
                <FormattedMessage id="cart.products.price" />
              </Col>
              <Col xs="2" sm="2" md="2">
                <FormattedMessage id="cart.products.quantity" />
              </Col>
              <Col xs="2" sm="2" md="2">
                <FormattedMessage id="cart.products.subtotal" />
              </Col>
            </Row>
            {this.buildRows()}
          </Col>
        </Row>
        <Row>
          <Col>
            <span className="text-link float-right" onClick={this.clearCart}><FormattedMessage id="cart.emptyCart" /></span>
          </Col>
        </Row>

        <Row className="row-spacing">
          <Col xs="5" sm="5" md="5">
            <h2><FormattedMessage id="cart.shipping" /></h2>
            <Row className="tableHeader">
              <Col xs="12" sm="12" md="12">
                <FormattedMessage id="cart.shipping.nationalShipping" />
              </Col>
            </Row>
            <Row className="shippingRow">
              <Col xs="8" sm="8" md="8">
                <Label check>
                  <Input type="radio" name="shipping" onClick={() => this.setState({shippingPrice: shipping24})} />
                  <FormattedMessage id="cart.shipping.shipping1" />
                </Label>
              </Col>
              <Col xs="4" sm="4" md="4">
                {shipping24.toFixed(2)} €
              </Col>
            </Row>
            <Row className="shippingRow">
              <Col xs="8" sm="8" md="8">
                <Label check>
                  <Input type="radio" name="shipping" onClick={() => this.setState({shippingPrice: shipping48})}/>
                  <FormattedMessage id="cart.shipping.shipping2" />
                </Label>
              </Col>
              <Col xs="4" sm="4" md="4">
                {shipping48.toFixed(2)} €
              </Col>
            </Row>
          </Col>
          <Col md={{ size: 6, offset: 1 }}>
            <Row>
              <h2><FormattedMessage id="cart.cartTotal" /></h2>
            </Row>
            <Row>
              <Col className="summaryTableLeft" xs="4" sm="4" md="4">
                <FormattedMessage id="cart.subtotal" />
              </Col>
              <Col className="summaryTableRight" xs="8" sm="8" md="8">
                {subTotalPrice.toFixed(2)} €
              </Col>
            </Row>
            <Row>
              <Col className="summaryTableLeft" xs="4" sm="4" md="4">
                <FormattedMessage id="cart.shipping" />
              </Col>
              <Col className="summaryTableRight" xs="8" sm="8" md="8">
                {this.state.shippingPrice.toFixed(2)} €
              </Col>
            </Row>
            <Row>
              <Col className="summaryTableLeft summaryTableLeftLast" xs="4" sm="4" md="4">
                <FormattedMessage id="cart.total" />
              </Col>
              <Col className="summaryTableRight summaryTableRightLast" xs="8" sm="8" md="8">
                <span className="bold">{(subTotalPrice+this.state.shippingPrice).toFixed(2)} €</span> (inclui IVA)
              </Col>
            </Row>
            <Row className="row-spacing">
              <Button
                className="btn-gold btn-wide"
                onClick={this.addToCart}
                disabled={!this.props.cart || this.state.shippingPrice===0}
                >
                <FormattedMessage id="buttons.cart.finish" /> →
              </Button>
            </Row>
          </Col>
        </Row>
      </div>
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

export default withRouter(connect(mapStateToProps, {setCart})(Cart));
