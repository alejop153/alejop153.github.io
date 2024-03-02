import React from "react";

// reactstrap components
import {
  Badge,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function PaginationSection() {
  const [pills, setPills] = React.useState("2");
  return (
    <>
      <div className="section section-pagination">
        <Container>
          <h4>Knowledge</h4>
          <Row>
            <Col md="6">
              <br />
              <div className="progress-container progress-info">
                <span className="progress-badge">Python</span>
                <Progress max="100" value="70">
                  <span className="progress-value">70%</span>
                </Progress>
              </div>
              <div className="progress-container progress-info">
                <span className="progress-badge">Javascript</span>
                <Progress max="100" value="70">
                  <span className="progress-value">70%</span>
                </Progress>
              </div>{" "}
              <div className="progress-container progress-info">
                <span className="progress-badge">Java</span>
                <Progress max="100" value="60">
                  <span className="progress-value">60%</span>
                </Progress>
              </div>{" "}
              <div className="progress-container progress-info">
                <span className="progress-badge">Go</span>
                <Progress max="100" value="35">
                  <span className="progress-value">35%</span>
                </Progress>
              </div>
            </Col>
            <Col md="6">
              <br />
              <div className="progress-container progress-info">
                <span className="progress-badge">React/React Native</span>
                <Progress max="100" value="70">
                  <span className="progress-value">70%</span>
                </Progress>
              </div>{" "}
              <div className="progress-container progress-info">
                <span className="progress-badge">Flutter</span>
                <Progress max="100" value="65">
                  <span className="progress-value">65%</span>
                </Progress>
              </div>{" "}
              <div className="progress-container progress-info">
                <span className="progress-badge">Databases</span>
                <Progress max="100" value="65">
                  <span className="progress-value">65%</span>
                </Progress>
              </div>{" "}
              <div className="progress-container progress-info">
                <span className="progress-badge">Cloud</span>
                <Progress max="100" value="40">
                  <span className="progress-value">40%</span>
                </Progress>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default PaginationSection;
