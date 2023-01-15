import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";

import {
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsStackOverflow,
  BsGoogle,
  BsGithub,
  BsYoutube,
} from "react-icons/bs";
const FooterComponent = () => {
  return (
    <>
      <footer className="myFooter">
        <Container>
          <Row>
            <Col className="">
              <h3 className="head_3">Follow Me :- </h3>
              <ul className="socialIconsList">
                <li>
                  <a
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/ameer86/"
                    target="_blank"
                  >
                    <BsLinkedin />
                  </a>
                </li>

                <li>
                  <a
                    rel="noreferrer"
                    href="https://stackoverflow.com/users/19499075/ameer"
                    target="_blank"
                  >
                    <BsStackOverflow />
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    href="https://ameerusa-portfolio.netlify.app"
                    target="_blank"
                  >
                    <BsGoogle />
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    href="https://github.com/Ameerusa86"
                    target="_blank"
                  >
                    <BsGithub />
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    href="https://www.youtube.com/channel/UCoC2WTn5wlxcqGkbLbUH8-w"
                    target="_blank"
                  >
                    <BsYoutube />
                  </a>
                </li>
              </ul>
            </Col>
            <Col className="col-12">
              <div className="footerCopyright">
                <small>
                  © Developed and Designed by{" "}
                  <a
                    href="https://www.youtube.com/channel/UCoC2WTn5wlxcqGkbLbUH8-w"
                    target="_blank"
                    rel="noreferrer"
                  >
                    AMEER HASAN
                  </a>
                  .
                </small>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default FooterComponent;
