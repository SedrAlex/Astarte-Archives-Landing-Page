import React from "react";
import Hero from "../../../container/HomePage/Hero/Hero";
import NavBar from "../../../components/NavBar/NavBar";
import Partners from "../../../container/HomePage/Partners/Partners";
import Breif from "../../../container/HomePage/About/Breif";
import CultureExpreiences from "../../../container/HomePage/CultureExpreiences/CultureExpreiences";
import Experiences from "../../../container/HomePage/CultureExpreiences/Experiences";
import Subscribe from "../../../container/HomePage/SubscribeSection/Subscribe";
import FundedProject from "../../../container/HomePage/FundedProjects/FundedProject";

const HomePage = () => {
  return (
    <>
      {" "}
      <Hero />
      <Partners />
      <Breif />
      <Experiences />
      <FundedProject />
      <Subscribe />
    </>
  );
};

export default HomePage;
