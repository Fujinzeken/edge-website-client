import React from "react";
import Slider from "react-slick";

import ava1 from "../../images/ava-1.jpg";
import ava2 from "../../images/ava-2.jpg";
import ava3 from "../../images/ava-3.jpg";
import "./testimonials.css";
import { Col, Container, Row } from "reactstrap";
// react-slick settings
const Testimonials = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 5000,
    swipetoSlide: true,
    slidesToShow: 1,
    slidersToScroll: 1,
  };
  return (
    <Container className="mt-5 mb-5 testimonial__wrapper shadow p-3 mb-5 rounded">
      <Row>
        <Col>
          <Slider {...settings}>
            <div>
              <div className="slider__content d-flex align-items-center gap-2">
                <img src={ava1} alt="customer-avatar" className="" />
                <h6>John Doe</h6>
              </div>
              <p className="review__text">
                Dolore dolore ea minim laboris.Culpa deserunt id aute anim sunt
                ea qui eu anim sit dolore sit duis magna. Lorem exercitation
                eiusmod in ullamco amet laboris occaecat voluptate.
              </p>
            </div>

            <div>
              <div className="slider__content d-flex align-items-center gap-2">
                <img src={ava2} alt="customer-avatar" className="" />
                <h6>Jannet Doe</h6>
              </div>
              <p className="review__text">
                Dolore dolore ea minim laboris.Culpa deserunt id aute anim sunt
                ea qui eu anim sit dolore sit duis magna. Lorem exercitation
                eiusmod in ullamco amet laboris occaecat voluptate.
              </p>
            </div>

            <div>
              <div className="slider__content d-flex align-items-center gap-2">
                <img src={ava3} alt="customer-avatar" className="" />
                <h6>Mitch Mitchellson</h6>
              </div>
              <p className="review__text">
                Dolore dolore ea minim laboris.Culpa deserunt id aute anim sunt
                ea qui eu anim sit dolore sit duis magna. Lorem exercitation
                eiusmod in ullamco amet laboris occaecat voluptate.
              </p>
            </div>
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonials;
