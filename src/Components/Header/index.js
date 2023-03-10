import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./style.css";

const HeaderComponent = () => {
  const navData = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Movies", link: "/movies" },
    { name: "TV Series", link: "/series" },
    { name: "Search", link: "/search" },
    { name: "Contact Me", link: "/contact" },
  ];

  return (
    <header className="header">
      <Navbar bg="dark" expand="lg">
        <Container className="containerNav">
          <Navbar.Brand className="logo">Cinema World</Navbar.Brand>
          <Navbar.Toggle className="navbartoggle" area-contrls="navbarScroll" />
          <Navbar.Collapse id="navbarSroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {navData.map((item) => {
                return (
                  <Nav key={item.name}>
                    <Link to={item.link}>{item.name}</Link>
                  </Nav>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default HeaderComponent;
