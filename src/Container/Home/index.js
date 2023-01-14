import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import CardMoviesComponents from "../../Components/Card";
import PaginationComponent from "../../Components/Pagination";

const HomeContainer = () => {
  const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;
  const [content, setContent] = useState([]);
  const [pageno, setPageno] = useState(1);
  const [paginationno, setPaginationno] = useState(0);

  const GetDataTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageno}`
    );
    setContent(data.results);
    setPaginationno(data.total_pages);
  };

  const handleClick = (number) => {
    setPageno(number);
  };

  useEffect(() => {
    // console.log("Trending Component didupdate mount");
    GetDataTrending();
    //eslint-disable-next-line
  }, [pageno]);

  useEffect(() => {
    GetDataTrending();
  }, []);

  return (
    <main className="homePage">
      <Container>
        <Row>
          <Col className="col-12">
            <section>
              <h1 className="txtCenter">Top Trending </h1>
              <h3 className="txtCenter">MOVIES & TV SERIES just for you</h3>
            </section>
          </Col>
          {content && content.length > 0
            ? content.map((item, index) => {
                return (
                  <CardMoviesComponents
                    key={index}
                    data={item}
                    mediaType="tv"
                  />
                );
              })
            : "Loading ...."}
          {paginationno && paginationno > 1 ? (
            <PaginationComponent
              maxnum={paginationno}
              activenum={pageno}
              handleClick={handleClick}
            />
          ) : (
            ""
          )}
        </Row>
      </Container>
    </main>
  );
};

export default HomeContainer;
