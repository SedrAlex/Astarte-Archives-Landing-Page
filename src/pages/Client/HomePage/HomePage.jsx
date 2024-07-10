import React from "react";
import Hero from "../../../container/Home/Hero/Hero";
import NavBar from "../../../components/NavBar/NavBar";
import Partners from "../../../container/Home/Partners/Partners";
import Breif from "../../../container/Home/About/Breif";
import CultureExpreiences from "../../../container/Home/CultureExpreiences/CultureExpreiences";
import Experiences from "../../../container/Home/CultureExpreiences/Experiences";
import Subscribe from "../../../container/Home/SubscribeSection/Subscribe";
import FundedProject from "../../../container/Home/FundedProjects/FundedProject";
import MuseumSection from "../../../container/Home/MuseumSection/MuseumSection";

const HomePage = () => {
  return (
    <>
      {" "}
      <Hero />
      <Partners />
      <Breif />
      <Experiences />
      <MuseumSection />
      <FundedProject />
      <Subscribe />
    </>
  );
};

export default HomePage;
