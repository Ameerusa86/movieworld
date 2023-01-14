import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import {
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsStackOverflow,
  BsGoogle,
  BsGithub,
  BsYoutube,
} from "react-icons/bs";
import "./style.css";
const ContactContainer = () => {
  const myData = [
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/ameer86/",
      text: "Follow to my linkedin.",
    },

    {
      name: "StackOverFlow",
      link: "https://stackoverflow.com/users/19499075/ameer",
      text: "Check out to my stackoverflow account.",
    },
    {
      name: "Blog",
      link: "https://ameerusa-portfolio.netlify.app",
      text: "Follow to my blog.",
    },
    {
      name: "GitHub",
      link: "https://github.com/Ameerusa86",
      text: "Follow to my github account.",
    },
    {
      name: "YouTube",
      link: "https://www.youtube.com/channel/UCoC2WTn5wlxcqGkbLbUH8-w",
      text: "Follow to my youtube channel.",
    },
    {
      name: "Email",
      link: "mailto:ameer.usa1986@gmail.com",
      text: "write to me a mail",
    },
  ];
  return (
    <div className="contactWrap">
      <Container>
        <Row>
          <Col>
            <p>CONNECT WITH US</p>
            <h1>Get in Touch</h1>
          </Col>
        </Row>
        <Row>
          <Col className="conectIcon">
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
        </Row>
        <Row>
          <Col>
            <ListGroup className="contactList">
              {myData && myData.length > 0
                ? myData.map((item) => {
                    return (
                      <ListGroup.Item key={item.name}>
                        <span>{item.text}</span>
                        <a href={item.link} rel="noreferrer" target="_blank">
                          {item.link}
                        </a>
                      </ListGroup.Item>
                    );
                  })
                : ""}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactContainer;
