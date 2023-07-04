import React, { useContext, useEffect } from "react";
import "./login.css";
import { Container, Col, Row } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import music from "../../images/music01.png";
import { AuthProvider } from "../../context/AuthContext";

function Login() {
  const { login, user } = useContext(AuthProvider);
  const navigate = useNavigate();

  const loginSchema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(8).required("Password is required"),
  });
  const { handleSubmit, setError, register, formState } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { errors } = formState;

  const submit = async (data) => {
    await login(data, () => {
      setError("email", {
        type: "manual",
        message: "Email or Password is Invalid",
      });
    });
  };

  useEffect(() => {
    if (user) navigate("/");
  });
  return (
    <Container className="pb-5">
      <Row>
        <Col>
          <div>
            <img src={music} alt="" className="w-100" />
          </div>
        </Col>
        <Col sm="6" md="6" className="mt-5 pt-5">
          <h3 className="text-center mb-4">Login</h3>
          <form
            noValidate
            className="form mb-4 form__wrapper"
            onSubmit={handleSubmit(submit)}
          >
            <div className="d-flex flex-column align-items-start mb-3">
              <label className="mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter email..."
                className="form__input"
                {...register("email")}
              />
              <span style={{ color: "red", fontSize: "14px" }}>
                {errors.email && errors.email.message}
              </span>
            </div>
            <div className="d-flex flex-column align-items-start mb-3">
              <label>Password</label>
              <input
                type="text"
                placeholder="Enter password..."
                className="form__input"
                {...register("password")}
              />
              <span style={{ color: "red", fontSize: "14px" }}>
                {errors.password && errors.password.message}
              </span>
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
