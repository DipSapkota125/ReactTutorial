import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Khana from "../../images/khana.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const cssStyle = {
    width: "150px",
  };

  const myStyle = {
    textDecoration: "none",
    margin: "8px",
    color: "gray",
  };
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-12 mx-auto">
            <Navbar bg="light" expand="lg">
              <Container fluid>
                <div>
                  <NavLink to="/">
                    <img style={cssStyle} src={Khana} alt="" />
                  </NavLink>
                </div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    navbarScroll
                  >
                    <NavLink style={myStyle} to="/about">
                      About
                    </NavLink>
                    <NavLink style={myStyle} to="/contact">
                      Contact
                    </NavLink>

                    <NavDropdown title="profile" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#action3">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Form className="d-flex">
                    <NavLink to="/register">
                      <Button variant="outline-primary">Sign In</Button>
                    </NavLink>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
