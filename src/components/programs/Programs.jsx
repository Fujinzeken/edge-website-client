import React from "react";
import "./programs.css";
import { Col, Container, Row } from "reactstrap";
import Product from "../product/Product";
function Programs() {
  return (
    <Container className="mt-5">
      <Row>
        <Col lg="12" className="program__title">
          <h1 className="mb-3">Our Programs</h1>
          <h5>
            A wealth of knowledge at your fingertips, whether you choose to
            study at our learning center in Lagos or take our
            <strong>
              <span> Online</span>
            </strong>{" "}
            classes, our courses will meet your expectations
          </h5>
        </Col>
      </Row>
      <Row>
        <Col lg="3" md="4" sm="6" xs="6" className="mt-5">
          <Product />
        </Col>
        <Col lg="3" md="4" sm="6" xs="6" className="mt-5">
          <Product />
        </Col>
        <Col lg="3" md="4" sm="6" xs="6" className="mt-5">
          <Product />
        </Col>
        <Col lg="3" md="4" sm="6" xs="6" className="mt-5">
          <Product />
        </Col>
      </Row>
    </Container>
  );
}

export default Programs;
