import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import "./courseDetails.css";
import Helmet from "../helmet/Helmet";
import CommonSection from "../common-section/CommonSection";
import ava1 from "../../images/ava-1.jpg";
import ava2 from "../../images/ava-2.jpg";
import guitar from "../../images/guitar-Guitar.png";

const CourseDetails = () => {
  const [tab, setTab] = useState("overview");
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

            <div className="rating__wrapper">
              {tab === "overview" && (
                <>
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
                        Dolore dolore ea minim laboris.Culpa deserunt id aute
                        anim sunt ea qui eu anim sit dolore sit duis magna.
                        Lorem exercitation eiusmod in ullamco amet laboris
                        occaecat voluptate.
                      </p>
                    </div>
                    <div>
                      <div className="slider__content d-flex align-items-center gap-2">
                        <img src={ava2} alt="customer-avatar" className="" />
                        <h6>John Doe</h6>
                      </div>
                      <p className="review__text">
                        Dolore dolore ea minim laboris.Culpa deserunt id aute
                        anim sunt ea qui eu anim sit dolore sit duis magna.
                        Lorem exercitation eiusmod in ullamco amet laboris
                        occaecat voluptate.
                      </p>
                    </div>
                  </div>
                </>
              )}

              {tab === "details" && (
                <>
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
                </>
              )}
              {tab === "instructor" && (
                <>
                  <div>
                    <h2>Instructor</h2>
                    <div className="instructor d-flex align-items-center gap-4">
                      <div className="mb-4">
                        <img src={ava2} alt="customer-avatar" className="" />
                      </div>
                      <div>
                        <h6>John Doe</h6>
                        <span className="stars">
                          <i className="ri-star-line star"></i>
                        </span>
                        <p>3040 Students</p>
                      </div>
                    </div>
                    <div className="review__text">
                      <p>
                        Dolore dolore ea minim laboris.Culpa deserunt id aute
                        anim sunt ea qui eu anim sit dolore sit duis magna.
                        Lorem exercitation eiusmod in ullamco amet laboris
                        occaecat voluptate.
                      </p>
                    </div>
                  </div>
                </>
              )}
              {tab === "reviews" && (
                <>
                  <div>
                    <h2>Reviews</h2>
                    <div className="instructor d-flex align-items-center gap-4">
                      <div className="mb-4">
                        <img src={ava2} alt="customer-avatar" className="" />
                      </div>
                      <div>
                        <h6>John Doe</h6>
                        <p>⭐⭐⭐⭐⭐</p>
                        <p>3040 Students</p>
                      </div>
                    </div>
                    <div className="review__text">
                      <p>
                        Dolore dolore ea minim laboris.Culpa deserunt id aute
                        anim sunt ea qui eu anim sit dolore sit duis magna.
                        Lorem exercitation eiusmod in ullamco amet laboris
                        occaecat voluptate.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </Col>
          <Col lg="6" md="6" sm="6">
            <div className="price_section">
              <div className="image_container text-center">
                <img src={guitar} alt="" className="course-image w-100" />
              </div>

              <div className="d-flex align-items-center gap-3 justify-content-center">
                <span style={{ fontSize: "25px" }}>$20</span>
                <span style={{ textDecoration: "line-through" }}>$99.99</span>
                <span>50%OFF</span>
              </div>

              <div className="time__left">
                <p>11hrs left on this price</p>
              </div>

              <div className="mb-3 gap-3 d-flex flex-column">
                <button className="buy__btn">Buy Now!</button>
                <button className="cart__btn">Add to cart</button>
              </div>
              <hr></hr>

              <div className="d-flex flex-column mb-3">
                <span>
                  <b>This course Includes:</b>
                </span>

                <li style={{ listStyle: "none" }}> 20 videos</li>
                <li style={{ listStyle: "none" }}>18hrs of content</li>
                <li style={{ listStyle: "none" }}>10 takehome assignments</li>
                <li style={{ listStyle: "none" }}>Lifetime Access</li>
              </div>
              <hr></hr>

              <div className="d-flex flex-column mb-3">
                <span>
                  <b>Training 5 or more people?</b>
                </span>
                <p>
                  Get your team access to 22,000+ top Music courses anytime,
                  anywhere.
                </p>
              </div>

              <hr></hr>
            </div>
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

export default CourseDetails;
