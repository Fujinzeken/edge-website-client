import React from "react";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./topimg.css";
import guitar from "../../images/guitar-Guitar.png";
import { Link } from "react-router-dom";

function TopIMG() {
  return (
    <Container>
      <Row>
        <Col sm="6" md="6">
          <div className="hero__content">
            <h1 className="mb-4 hero__title">
              Up Your <span>Skills</span> and <span>Advance </span> your{" "}
              <span>Career </span> path
            </h1>
            <p className="mb-3">
              Unleash your potential with our array of online courses and vastly
              experienced instructors
            </p>
            <div className="hero__btn">
              <Link to="/courses">
                <button className="e__learn">Get Started</button>
              </Link>
              <button className="get__demo">Get free Demo</button>
            </div>
          </div>
        </Col>
        <Col sm="6" md="6">
          <div className="hero__image">
            <img src={guitar} alt="" className="w-100 rounded-circle" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default TopIMG;
