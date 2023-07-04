import React from "react";
import { Container, Col, Row } from "reactstrap";
import "./courses.css";
import Product from "../../components/product/Product";

function Courses() {
  return (
    <Container className="mt-5">
      <Row className="mt-5">
        <Col lg="12" className="program__title">
          <h2>Choose your favourite course from our top categories</h2>
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
      <Row className="mt-5">
        <Col>
          <div className="d-flex justify-content-between align-items-center">
            <h2>Recommended for you</h2>
            <span style={{ color: "#53389e", cursor: "pointer" }}>See All</span>
          </div>
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
      <Row className="mt-5">
        <h2>Topmost rated courses</h2>
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

export default Courses;
