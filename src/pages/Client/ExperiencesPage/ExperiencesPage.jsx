import React, { useRef } from "react";
import ExperiencesHero from "../../../container/Experiences/Hero/ExperiencesHero";
import YearRoundedExperiences from "../../../container/Experiences/YearRoundedExperiences/YearRoundedExperiences";
import SeasonalExperiences from "../../../container/Experiences/SeasonalExperiences/SeasonalExperiences";
import UpcomingEvents from "../../../container/Experiences/UpcomingEvents/UpcomingEvents";
import ImpactSection from "../../../container/Experiences/ImpactSection/ImpactSection";
import { useGetExperiencesQuery } from "../../../redux/apis/clientsApi";
import CustomLoader from "../../../components/CustomLoader/CustomLoader";
import MapSection from "../../../container/Experiences/MapSection/MapSectiom";

const ExperiencesPage = () => {
  const { data: experiences, error, isLoading } = useGetExperiencesQuery();
  const tours = experiences?.results;
  console.log("tours", tours);

  const yearlyRef = useRef(null);
  const seasonlyRef = useRef(null);
  const upcominglyRef = useRef(null);

  const yearlyTours = tours?.filter(tour => tour.status === "yearly").slice(0, 2);
  const seasonlyTours = tours?.filter(tour => tour.status === "seasonly").slice(0, 1);
  const upcomingTours = tours?.filter(tour => tour.status === "upcoming").slice(0, 4);

  if (isLoading) {
    return <CustomLoader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <ExperiencesHero yearlyRef={yearlyRef} seasonlyRef={seasonlyRef} upcominglyRef={upcominglyRef} />
      <div id="yearly" ref={yearlyRef}>
        <YearRoundedExperiences tours={yearlyTours} />
      </div>
      <MapSection />
      <div id="seasonly" ref={seasonlyRef}>
        <SeasonalExperiences  tours= {seasonlyTours}/>
      </div>
      <div id="upcoming" ref={upcominglyRef}>
      <UpcomingEvents   tours= {upcomingTours}/>
      </div>
      <ImpactSection />
    </>
  );
};

export default ExperiencesPage;
