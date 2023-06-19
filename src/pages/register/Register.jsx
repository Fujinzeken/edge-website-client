import React from "react";
import "./register.css";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

function Register() {
  return (
    <Container className="mt-5 login m-auto text-center">
      <Row>
        <Col>
          <h3 className="text-center mb-4">Register </h3>
          <form className="form mb-4">
            <div className="d-flex flex-column align-items-start mb-3">
              <label className="mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter email..."
                className="form__input"
              />
            </div>
            <div className="d-flex flex-column align-items-start mb-3">
              <label>Password</label>
              <input
                type="text"
                placeholder="Enter password..."
                className="form__input"
              />
            </div>
            <div className="signIn__link">
              <p>
                Already have an account?{" "}
                <Link to="/login">
                  <span>Log In</span>
                </Link>
              </p>
              <button className="mb-3">Sign Up</button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
