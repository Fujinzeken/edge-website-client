import React from "react";
import Programs from "../../components/programs/Programs";
import Testimonials from "../../components/Testimonials/Testimonials";
import TopIMG from "../../components/topimage/TopIMG";
import "./home.css";
import Helmet from "../../components/helmet/Helmet";
function Home() {
  return (
    <Helmet title="Home">
      <TopIMG />
      <Programs />
      <Testimonials />
    </Helmet>
  );
}

export default Home;
