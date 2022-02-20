import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarText,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
} from "reactstrap";
import { Link } from "react-router-dom";
import CartSummary from "../cart/CartSummary";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" expand="md" light>
          <NavbarBrand><Link to="/">Northwind Mağazası</Link></NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink>
                  
                  <Link to="/saveproduct">Ürün Ekle</Link>
                </NavLink>
              </NavItem>
              <CartSummary />
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
