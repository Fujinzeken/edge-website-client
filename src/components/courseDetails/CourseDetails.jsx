import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import "./courseDetails.css";
import Helmet from "../helmet/Helmet";
import CommonSection from "../common-section/CommonSection";
import ava1 from "../../images/ava-1.jpg";
import ava2 from "../../images/ava-2.jpg";

const CourseDetails = () => {
  const [tab, setTab] = useState("overview");
  console.log(tab);
  return (
    <Helmet title="Course Details">
      <CommonSection title="Course Name" />
      <Container>
        <Row>
          <Col lg="6" md="6" sm="6">
            <div className=" d-flex gap-3 py-2 align-items-center">
              <div
                className={tab === "overview" ? "tabs__active" : "tabs"}
                onClick={() => setTab("overview")}
              >
                <h6>Overview</h6>
              </div>
              <div
                className={tab === "details" ? "tabs__active" : "tabs"}
                onClick={() => setTab("details")}
              >
                <h6>Details</h6>
              </div>
              <div
                className={tab === "instructor" ? "tabs__active" : "tabs"}
                onClick={() => setTab("instructor")}
              >
                <h6>Instructor</h6>
              </div>
              <div
                className={tab === "reviews" ? "tabs__active" : "tabs"}
                onClick={() => setTab("reviews")}
              >
                <h6>Reviews</h6>
              </div>
            </div>
            {tab === "overview" && (
              <div className="rating__wrapper">
                <div className="d-flex gap-4">
                  <div
                    className="d-flex flex-column align-items-start p-3"
                    style={{
                      background: "#fff",
                      borderRadius: "10px",
                      color: "#000",
                    }}
                  >
                    <span>5 out of 5</span>
                    <span>⭐⭐⭐⭐⭐</span>
                    <span>3040 Students</span>
                  </div>
                  <div>
                    <div className="d-flex flex-column gap-3">
                      <span>Created by: Instructor Name</span>
                      <span>
                        Dolore dolore ea minim laboris.Culpa deserunt id aute
                        anim sunt ea qui eu anim sit dolore sit duis magna.
                        Lorem exercitation eiusmod in ullamco amet laboris
                        occaecat voluptate.
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{}}>
                  <div>
                    <div className="slider__content d-flex align-items-center gap-2">
                      <img src={ava1} alt="customer-avatar" className="" />
                      <h6>John Doe</h6>
                    </div>
                    <p className="review__text">
                      Dolore dolore ea minim laboris.Culpa deserunt id aute anim
                      sunt ea qui eu anim sit dolore sit duis magna. Lorem
                      exercitation eiusmod in ullamco amet laboris occaecat
                      voluptate.
                    </p>
                  </div>
                  <div>
                    <div className="slider__content d-flex align-items-center gap-2">
                      <img src={ava2} alt="customer-avatar" className="" />
                      <h6>John Doe</h6>
                    </div>
                    <p className="review__text">
                      Dolore dolore ea minim laboris.Culpa deserunt id aute anim
                      sunt ea qui eu anim sit dolore sit duis magna. Lorem
                      exercitation eiusmod in ullamco amet laboris occaecat
                      voluptate.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {tab === "details" && (
              <div className="rating__wrapper">
                <div>
                  <h2>What you will Learn</h2>
                  <p>
                    {" "}
                    Dolore dolore ea minim laboris.Culpa deserunt id aute anim
                    sunt ea qui eu anim sit dolore sit duis magna. Lorem
                    exercitation eiusmod in ullamco amet laboris occaecat
                    voluptate.
                  </p>
                </div>
                <div>
                  <h2>Requirements</h2>
                  <ul className="list__ul">
                    <Row>
                      <Col lg="6">
                        <li className="list">Own a Guitar</li>
                      </Col>
                      <Col lg="6">
                        <li className="list">
                          Basic knowledge of Music theory
                        </li>
                      </Col>
                      <Col lg="6">
                        <li className="list">
                          Basic knowledge of Music theory
                        </li>
                      </Col>
                      <Col lg="6">
                        <li className="list">
                          Basic knowledge of Music theory
                        </li>
                      </Col>
                    </Row>
                  </ul>
                </div>
                <div>
                  <h2>Description</h2>
                  <p>
                    {" "}
                    Dolore dolore ea minim laboris.Culpa deserunt id aute anim
                    sunt ea qui eu anim sit dolore sit duis magna. Lorem
                    exercitation eiusmod in ullamco amet laboris occaecat
                    voluptate.
                  </p>
                </div>
              </div>
            )}
          </Col>
          <Col lg="6" md="6" sm="6"></Col>
        </Row>
      </Container>
    </Helmet>
  );
};

export default CourseDetails;
