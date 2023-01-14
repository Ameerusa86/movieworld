import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

const HomeContainer = () => {
  return (
    <main className="homePage">
      <Container>
        <Row>
          <Col className="col-12">Hello form Home Page</Col>
        </Row>
      </Container>
    </main>
  );
};

export default HomeContainer;
