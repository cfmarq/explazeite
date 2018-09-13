import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const products = [
  {
    id: 1,
    img: '/public/images/produtos/azeite/p_azeite-1.png',
    label: 'products.p1.label',
    btnLabel: 'products.p1.button.label',
    btnLink: '',
    popupTitle: 'popup title',
    popupText: 'popup text'
  },
  {
    id: 2,
    img: '/public/images/produtos/azeite/p_azeite-2.png',
    label: 'products.p2.label',
    btnLabel: 'products.p2.button.label',
    btnLink: '',
    popupTitle: 'popup title2',
    popupText: 'popup text2'
  },
  {
    id: 3,
    img: '/public/images/produtos/azeite/p_azeite-3.png',
    label: 'products.p3.label',
    btnLabel: 'products.p3.button.label',
    btnLink: '',
    popupTitle: 'popup title3',
    popupText: 'popup text3'
  },
  {
    id: 4,
    img: '/public/images/produtos/azeite/p_azeite-4.png',
    label: 'products.p4.label',
    btnLabel: 'products.p4.button.label',
    btnLink: '',
    popupTitle: 'popup title',
    popupText: 'popup text'
  },
  {
    id: 5,
    img: '/public/images/produtos/azeite/p_azeite-5.png',
    label: 'products.p5.label',
    btnLabel: 'products.p5.button.label',
    btnLink: '',
    popupTitle: 'popup title',
    popupText: 'popup text'
  },
  {
    id: 6,
    img: '/public/images/produtos/azeite/p_azeite-6.png',
    label: 'products.p6.label',
    btnLabel: 'products.p6.button.label',
    btnLink: '',
    popupTitle: 'popup title',
    popupText: 'popup text'
  },
  {
    id: 7,
    img: '/public/images/produtos/azeite/p_azeite-7.png',
    label: 'products.p7.label',
    btnLabel: 'products.p7.button.label',
    btnLink: '',
    popupTitle: 'popup title',
    popupText: 'popup text'
  },
  {
    id: 8,
    img: '/public/images/produtos/azeite/p_azeite-8.png',
    label: 'products.p8.label',
    btnLabel: 'products.p8.button.label',
    btnLink: '',
    popupTitle: 'popup title',
    popupText: 'popup text'
  },
  {
    id: 9,
    img: '/public/images/produtos/azeite/p_azeite-9.png',
    label: 'products.p9.label',
    btnLabel: 'products.p9.button.label',
    btnLink: '',
    popupTitle: 'popup title',
    popupText: 'popup text'
  },
  {
    id: 10,
    img: '/public/images/produtos/azeite/p_azeite-10.png',
    label: 'products.p10.label',
    btnLabel: 'products.p10.button.label',
    btnLink: '',
    popupTitle: 'popup title',
    popupText: 'popup text'
  }
];

class OliveOil extends Component {

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

    const product = products.map((products) =>
      <div className="col-xs-12 col-sm-6 col-md-4 product__outer-div" key={products.id}>
        <div className="product-div">
          <div className="product__upper-div">
            <img src={products.img} alt=""  />
          </div>
          <div className="product__label-div">
            <FormattedMessage id={products.label} />
          </div>
          <div className="product__button-div">
            <Button className="btn-gold btn-product" onClick={this.toggle}>
              <FormattedMessage id={products.btnLabel} />
            </Button>



            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalBody>

                <div className="col-md-4 popup__img-div">
                  <img src={products.img} alt=""  />
                </div>
                <div className="col-md-8 popup__text-div">
                  <div className="product__popup-header">
                    <FormattedMessage id={products.popupTitle} />
                  </div>
                  <div className="product__popup-body">
                    <FormattedMessage id={products.popupText} />
                  </div>
                </div>

              </ModalBody>
            </Modal>


          </div>
        </div>
      </div>
    );

    return (
      <div className="container products__div">
        <div className="col-xs-12 col-sm-9 col-md-3 products__left-div">
          <h1>
            <FormattedMessage id="products.oliveOil.title" /><br/>//
          </h1>
          <h3>
            <FormattedMessage id="products.oliveOil.benefits" /><br/>-
          </h3>
          <p>
            <FormattedMessage id="products.oliveOil.benefits.p1" />
          </p>
          <p>
            <FormattedMessage id="products.oliveOil.benefits.p2" />
          </p>
          <h3>
            <FormattedMessage id="products.oliveOil.interest" /><br/>-
          </h3>
          <p>
            <FormattedMessage id="products.oliveOil.interest.p1" />
          </p>
        </div>
        <div className="col-xs-12 col-sm-9 col-md-9 products__right-div">

          { /* {product} */ }

          <div className="col-xs-12 col-sm-6 col-md-4 product__outer-div">
            <div className="product-div">
              <div className="product__upper-div">
                <img src="/public/images/produtos/azeite/p_azeite-1.png" alt=""  />
              </div>
              <div className="product__label-div">
                <FormattedMessage id="products.p1.label" />
              </div>
              <div className="product__button-div">
                <Button className="btn-gold btn-product" onClick={this.toggle}>
                  <FormattedMessage id="products.p1.button.label" />
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalBody>
                    <div className="col-md-4 popup__img-div">
                      <img src="/public/images/produtos/azeite/p_azeite-1.png" alt=""  />
                    </div>
                    <div className="col-md-8 popup__text-div">
                      <div className="product__popup-header">
                        <h5 className="popup-h5"><FormattedMessage className="product__popup-title" id="products.p1.popup.title" /></h5>
                        <h6 className="popup-h6 light"><FormattedMessage className="product__popup-subtitle" id="products.p1.popup.subtitle" /></h6>
                      </div>
                      <div className="product__popup-body">
                        <p className="popup-text bold"><FormattedMessage id="products.p1.popup.p1" /></p>
                        <p className="popup-text light"><FormattedMessage id="products.p1.popup.p2" /></p>
                        <p className="popup-text light"><FormattedMessage id="products.p1.popup.p3" /></p>
                      </div>
                    </div>
                  </ModalBody>
                </Modal>
              </div>
            </div>
          </div>

        </div>
    	</div>
    );
  }
}

export default OliveOil;
