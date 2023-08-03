import React, { useContext, useEffect } from "react";
import "./register.css";
import { Col, Container, Row } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import music from "../../images/music01.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthProvider } from "../../context/AuthContext";

function Register() {
  const navigate = useNavigate();
  const { registration, user } = useContext(AuthProvider);

  const regSchema = yup.object().shape({
    fistName: yup.string().required("Please enter a firstName"),
    lastName: yup.string().required("Please enter a lastName"),
    email: yup.string().email().required("Email field is required"),
    password: yup.string().min(8).required("Please enter your password"),
  });

  const {
    handleSubmit,
    setError,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(regSchema),
  });

  const submit = async (data) => {
    await registration(data, () => {
      setError("email", {
        type: "manual",
        message: "Email or Password is Invalid",
      });
    });
    navigate("/");
  };

  useEffect(() => {
    if (user) navigate("/");
  });

  return (
    <>
      <Container className="pb-5">
        <Row>
          <Col>
            <div>
              <img src={music} alt="" className="w-100" />
            </div>
          </Col>
          <Col
            sm="6"
            md="6"
            className="mt-5 pt-4 d-flex flex-column align-items-center justify-center"
          >
            <h3 className="mb-4">Register </h3>
            <form
              className="form mb-3 form__wrapper"
              onSubmit={handleSubmit(submit)}
            >
              <div className="d-flex flex-column align-items-start">
                <label className="mb-1">First Name</label>
                <input
                  type="text"
                  placeholder="First Name..."
                  className="form__input"
                  {...register("firstName")}
                />
                <span style={{ color: "red", fontSize: "14px" }}>
                  {errors.fistName && errors.fistName.message}
                </span>
              </div>
              <div className="d-flex flex-column align-items-start">
                <label className="mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name..."
                  className="form__input"
                  {...register("lastName")}
                />
                <span style={{ color: "red", fontSize: "14px" }}>
                  {errors.lastName && errors.lastName.message}
                </span>
              </div>

              <div className="d-flex flex-column align-items-start">
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
              <div className="d-flex flex-column align-items-start">
                <label className="mb-1">Password</label>
                <input
                  type="password"
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
    </>
  );
}

export default Register;
