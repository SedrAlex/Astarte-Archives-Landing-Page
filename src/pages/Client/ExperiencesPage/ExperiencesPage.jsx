import React from "react";
import ExperiencesHero from "../../../container/Experiences/Hero/ExperiencesHero";
import YearRoundedExperiences from "../../../container/Experiences/YearRoundedExperiences/YearRoundedExperiences";
import MapSection from "../../../container/Experiences/MapSection/MapSectiom";
import SeasonalExperiences from "../../../container/Experiences/SeasonalExperiences/SeasonalExperiences";
import UpcomingEvents from "../../../container/Experiences/UpcomingEvents/UpcomingEvents";
import ImpactSection from "../../../container/Experiences/ImpactSection/ImpactSection";

const ExperiencesPage = () => {
  return (
    <>
      <ExperiencesHero />
      <YearRoundedExperiences />
      <MapSection />
      <SeasonalExperiences />
      <UpcomingEvents />
      <ImpactSection />
    </>
  );
};

export default ExperiencesPage;
