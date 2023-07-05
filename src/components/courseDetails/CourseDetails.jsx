import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./courseDetails.css";
import Helmet from "../helmet/Helmet";
import CommonSection from "../common-section/CommonSection";
const CourseDetails = () => {
  return (
    <Helmet title="Course Details">
      <CommonSection title="Course Name" />
      <Container>
        <Row></Row>
      </Container>
    </Helmet>
  );
};

export default CourseDetails;
