import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

const HomeContainer = () => {
  const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;
  const [content, setContent] = useState([]);
  const [pageno, setPageno] = useState(1);
  const [paginationno, setPaginationsno] = useState(0);

  const GetDataTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageno}`
    );
    setContent(data);
    console.log("data", data);
  };

  useEffect(() => {
    GetDataTrending();
  }, []);
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
