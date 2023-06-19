import React from "react";
import Footer from "../../components/footer/Footer";
import Programs from "../../components/programs/Programs";
import Testimonials from "../../components/Testimonials/Testimonials";
import TopIMG from "../../components/topimage/TopIMG";
import "./home.css";
function Home() {
  return (
    <>
      <TopIMG />
      <Programs />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
