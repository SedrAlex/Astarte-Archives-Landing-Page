import React from "react";
import ExperienceHero from "../../../container/ExperienceById/ExperienceHero/ExperienceHero";
import ExperienceWithOrganaization from "../../../container/ExperienceById/ExperienceWithOrganaization/ExperienceWithOrganaization";
import BookingForm from "../../../container/ExperienceById/BookingForm/BookingForm";
import ExpereienceDetails from "../../../container/ExperienceById/ExperienceDetails/ExpereienceDetails";
import { useParams } from 'react-router-dom';
import { useGetExperienceByIdQuery } from "../../../redux/apis/clientsApi";
import CustomLoader from "../../../components/CustomLoader/CustomLoader";

const ExperiencePage = () => {
  const { id } = useParams();
  const { data: expereience, error, isLoading } = useGetExperienceByIdQuery(id);
  const tour = expereience?.document
  console.log("data",tour);
  if (isLoading) {
    return <CustomLoader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <ExperienceHero tour={tour} />
      <ExperienceWithOrganaization tour={tour} />
      <ExpereienceDetails tour={tour}  />{" "}
    </div>
  );
};

export default ExperiencePage;
