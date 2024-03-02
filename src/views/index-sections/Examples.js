import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row } from "reactstrap";

// core components

function Examples() {
  return (
    <>
      <div className="section section-examples" data-background-color="black">
        <div className="space-50"></div>
        <Container>
          <h4>Some Projects</h4>
          <br></br>
          <Row className="text-center">
            <div className="col">
              <a href="https://test.manacle.co" target="_blank">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/landing.png")}
                ></img>
              </a>
              <Button className="btn-round" color="default" outline tag={Link}>
                Manacle
              </Button>
            </div>
            <div className="col">
              <a target="_blank">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/DWALLE.jpg")}
                ></img>
              </a>
              <Button className="btn-round" color="default" outline tag={Link}>
                DWalle
              </Button>
            </div>
          </Row>
          <br></br>
          <Row className="text-center">
            <div className="col">
              <a target="_blank">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/cattle.png")}
                ></img>
              </a>
              <Button className="btn-round" color="default" outline tag={Link}>
                Cattle App
              </Button>
            </div>
            <div className="col">
              <a target="_blank">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/delivery.png")}
                ></img>
              </a>
              <Button className="btn-round" color="default" outline tag={Link}>
                Delivery App
              </Button>
            </div>
          </Row>
          <br></br>
          <Row className="text-center">
            <div className="col">
              <a target="_blank">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/landing.png")}
                ></img>
              </a>
              <Button className="btn-round" color="default" outline tag={Link}>
                Indoor Plans Module
              </Button>
            </div>
            <div className="col">
              <a target="_blank">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/image.png")}
                ></img>
              </a>
              <Button className="btn-round" color="default" outline tag={Link}>
                Recomedation Filter
              </Button>
            </div>
          </Row>
          <br></br>
        </Container>
      </div>
    </>
  );
}

export default Examples;
