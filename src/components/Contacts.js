import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import { compose, withProps } from "recompose";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDNkl3-HgMgAfzyoRSDkuNZ-BHJi6vhSy4",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={12} defaultCenter={{ lat: 39.7357326, lng: -8.3250844 }}>
    <Marker
      position={{ lat: 39.7357326, lng: -8.3250844 }}
      title="Explazeite"
     />
  </GoogleMap>
));

class Contacts extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="box-container">
            <div className="col-xs-12 col-sm-6 col-md-6 contacts-div">
              <h1><FormattedMessage id="contacts.where-are-we" /><br/>//</h1>
              <p><FormattedMessage id="contacts.address1.p1" /></p>
              <p><FormattedMessage id="contacts.address1.p2" /></p>
              <p><FormattedMessage id="contacts.address1.p3" /></p>
              <p>-</p>
              <p><i><FormattedMessage id="contacts.open-store" /></i></p>
              <br/>
              <p><FormattedMessage id="contacts.filial" /></p>
              <p><FormattedMessage id="contacts.address2.p1" /></p>
              <p><FormattedMessage id="contacts.address2.p2" /></p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 contacts-div">
              <h1><FormattedMessage id="contacts.reach-us" /><br/>//</h1>
              <p><FormattedMessage id="contacts.email.title" /></p>
              <p><FormattedMessage id="contacts.email.content" /></p>
              <br/>
              <p><FormattedMessage id="contacts.telephone.title" /></p>
              <p><FormattedMessage id="contacts.telephone.headquarters" /></p>
              <p><FormattedMessage id="contacts.telephone.headquarters.t1" /></p>
              <p><FormattedMessage id="contacts.telephone.headquarters.t2" /></p>
              <p><FormattedMessage id="contacts.telephone.headquarters.fax" /></p>
              <br/>
              <p><FormattedMessage id="contacts.telephone.filial" /></p>
              <p><FormattedMessage id="contacts.telephone.filial.t1" /></p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 contacts-div">
            <img className="contacts-img" src="/public/images/contactos.png" alt="" />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 contacts-div">
            <h1><FormattedMessage id="contacts.schedule" /><br/>//</h1>
            <div className="col-md-12 flex no-padding">
              <div className="col-md-4 no-padding">
                <p><FormattedMessage id="contacts.p1" /></p>
                <p><FormattedMessage id="contacts.p2" /></p>
                <br/>
              </div>
              <div className="col-md-4 no-padding">
                <p><FormattedMessage id="contacts.p3" /></p>
                <p><FormattedMessage id="contacts.p4" /></p>
                <br/>
              </div>
              <div className="col-md-4 no-padding">
                <p><FormattedMessage id="contacts.p5" /></p>
                <p><FormattedMessage id="contacts.p6" /></p>
              </div>
            </div>
          </div>
          <h1><FormattedMessage id="contacts.map" /><br/>//</h1>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 no-padding">
          <MyMapComponent key="map" />
        </div>
      </div>
    );
  }
}

export default Contacts;
