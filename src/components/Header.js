import React, { Component } from 'react';
import { Collapse,Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';

export default class Header extends Component {
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
        <Navbar expand="md">
          <NavbarBrand href="/">
            <img className="nav-logo" src="/public/images/logo.png" alt="" />
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
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/history">
                      <FormattedMessage id="navbar.history" />
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/mill">
                      <FormattedMessage id="navbar.mill" />
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/cellar">
                      <FormattedMessage id="navbar.cellar" />
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <FormattedMessage id="navbar.products" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/olive-oil">
                      <FormattedMessage id="navbar.olive-oil" />
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/wine">
                      <FormattedMessage id="navbar.wine" />
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/olive">
                      <FormattedMessage id="navbar.olive" />
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/lupine">
                      <FormattedMessage id="navbar.lupine" />
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/mix">
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
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
