import React from "react";
// import Navbar from "../Layout/Navbar";
import FlightStatusForm from "./FlightStatusForm";
import Content from "./Content";
// import Footer from "../Layout/Footer";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <FlightStatusForm />
      <Content />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
