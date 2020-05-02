import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setLang} from './../../actions';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { FormattedMessage } from 'react-intl';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="container">
        <Navbar color="white" light expand="md">
          <NavbarBrand href="/">
            <img className="nav-logo" src="/images/logo.png" alt="" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">
                  <FormattedMessage id="navbar.home" />
                </NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <FormattedMessage id="navbar.about" />
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem>
                    <NavLink href="/story">
                      <FormattedMessage id="navbar.history" />
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/infrastructure/mill">
                      <FormattedMessage id="navbar.mill" />
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/infrastructure/cellar">
                      <FormattedMessage id="navbar.cellar" />
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <FormattedMessage id="navbar.products" />
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem>
                    <NavLink href="/products/oliveOil">
                      <FormattedMessage id="navbar.olive-oil" />
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/products/wine">
                      <FormattedMessage id="navbar.wine" />
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/products/olive">
                      <FormattedMessage id="navbar.olive" />
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/products/lupine">
                      <FormattedMessage id="navbar.lupine" />
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/products/mix">
                      <FormattedMessage id="navbar.mix" />
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <NavLink href="/featured">
                  <FormattedMessage id="navbar.featured" />
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/contacts">
                  <FormattedMessage id="navbar.contacts" />
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className="grey-nav-link" onClick={() => this.props.setLang('PT-pt')}>
                  PT
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="grey-nav-link" onClick={() => this.props.setLang('EN-en')}>
                  EN
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    locale: state.lang.locale,
    messages: state.lang.messages,
  };
};

export default connect(mapStateToProps, {setLang})(Header);
