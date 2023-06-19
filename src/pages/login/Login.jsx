import React from "react";
import "./login.css";
import { Container, Col, Row } from "reactstrap";
import login from "../../images/login.jpg";
import { Link } from "react-router-dom";
function Login() {
  return (
    <Container className="mt-5 login m-auto text-center">
      <Row>
        <Col>
          <h3 className="text-center mb-4">Login</h3>
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
                Don't have an account?{" "}
                <Link to="/register">
                  <span>Sign Up</span>
                </Link>
              </p>
              <button className="mb-3">Log In</button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
