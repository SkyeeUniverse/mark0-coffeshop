import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Menu, Search, ShoppingCart } from "react-feather";
import { toggleMenu } from "./func/script";

const NavigationBar = () => {
  return (
    <Container>
      <Navbar>
        <Container>
          <Navbar.Brand className="nav-logo">
            Cat<span>coffe</span>.
          </Navbar.Brand>
          {/* Nav-nav */}
          <Nav>
            <Nav.Item>
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#menu2">Menu</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#about">About us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
          {/* Nav-icon */}
          <div className="nav-icon">
            <a href="#" id="search">
              <Search />
            </a>
            <a href="#" id="shopping-cart">
              <ShoppingCart />
            </a>
            <a href="#" id="menu" onClick={toggleMenu}>
              <Menu />
            </a>
          </div>
          {/* Nav-icon */}
          {/* nav-nav end */}
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
