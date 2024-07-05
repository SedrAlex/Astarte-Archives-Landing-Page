import React from "react";
import ExperiencesHero from "../../../container/ExperiencesPage/Hero/ExperiencesHero";
import YearRoundedExperiences from "../../../container/ExperiencesPage/YearRoundedExperiences/YearRoundedExperiences";
import MapSection from "../../../container/ExperiencesPage/MapSection/MapSectiom";
import SeasonalExperiences from "../../../container/ExperiencesPage/SeasonalExperiences/SeasonalExperiences";
import UpcomingEvents from "../../../container/ExperiencesPage/UpcomingEvents/UpcomingEvents";
import ImpactSection from "../../../container/ExperiencesPage/ImpactSection/ImpactSection";

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
