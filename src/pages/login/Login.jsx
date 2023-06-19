import React from "react";
import "./login.css";
import { Container, Col, Row } from "reactstrap";
import guitar from "../../images/guitar-pics.png";
function Login() {
  return (
    <Container className="mt-5 login">
      <Row>
        <Col sm="6" md="6">
          <div>
            <img src={guitar} alt="" className="w-100" />
          </div>
        </Col>
        <Col sm="6" md="6" className="">
          <h3 className="text-center">Login</h3>
          <form className=" m-auto mb-5 text-center">
            <div className="d-flex flex-direction">
              <label>Email</label>
              <input type="email" placeholder="Enter email..." />
            </div>
            <div>
              <label>Password</label>
              <input type="text" placeholder="Enter password..." />
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
