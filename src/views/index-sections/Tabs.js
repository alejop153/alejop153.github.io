import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <h4>Current Situation</h4>
          <br></br>
          <Row>
            <Col
              className="ml-auto mr-auto"
              style={{
                flex: 1,
              }}
            >
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                        <i className="now-ui-icons objects_umbrella-13"></i>
                        EIA University
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("2");
                        }}
                      >
                        <i className="now-ui-icons shopping_cart-simple"></i>
                        Manacle Company
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("3");
                        }}
                      >
                        <i className="now-ui-icons shopping_shop"></i>
                        Commercial Real Estate
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("4");
                        }}
                      >
                        <i className="now-ui-icons ui-2_settings-90"></i>
                        Stocks and Crypto
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      <p>
                        Studying Systems and Computing Engineering at EIA
                        University has been an enriching journey, offering the
                        opportunity to meet exceptional individuals and
                        professors, which have fueled my passion for
                        programming, exposing me to a diverse range of
                        experiences with different companies to developing
                        software that connects with databases and beyond.
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                        I am currently fortunate to be part of a remarkable team
                        at Manacle Software, which specializes in providing
                        software solutions aimed at managing and automating
                        repetitive tasks in bars and nightclubs. This experience
                        has not only allowed me to contribute to the team's
                        innovative projects but also to grow professionally in
                        the field of software development.
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills3">
                      <p>
                        With a interest in fostering Colombian commerce and
                        economic movement, I am involved in the
                        commercialization of real estate projects through the
                        esteemed company, Santa Juana Inmobiliaria.
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills4">
                      <p>
                        As follower of the financial markets, including stock
                        exchanges and the evolving landscape of
                        cryptocurrencies, I am deeply interested in the
                        technological advancements that are transforming the
                        ways in which money is exchanged and represented.
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Tabs;
