// src/pages/Project.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectHero from '../../../container/ProjectById/ProjectHero/ProjectHero';
import ProjectInformation from '../../../container/ProjectById/ProjectInformation/ProjectInformation';
import CustomLoader from '../../../components/CustomLoader/CustomLoader';
import { useGetImpactFundByIdQuery } from '../../../redux/apis/clientsApi';

const Project = () => {
  const { id } = useParams();
  const { data: project, error, isLoading } = useGetImpactFundByIdQuery(id);
   const ImpactFund = project?.document
  console.log("data",ImpactFund);
  if (isLoading) {
    return <CustomLoader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div >
      <ProjectHero project={ImpactFund} />
      <ProjectInformation project={ImpactFund} />
    </div>
  );
};

export default Project;
