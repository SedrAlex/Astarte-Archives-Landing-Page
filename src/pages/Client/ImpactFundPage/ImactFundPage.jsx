import React from 'react'
import ImpactFundedHero from '../../../container/ImpactFund/Hero/ImpactFundedHero'
import ImpactFundStatistics from '../../../container/ImpactFund/Statistics/ImpactFundStatistics'
import ImpcatFundedAbout from '../../../container/ImpactFund/ImpactFundedAbout/ImpcatFundedAbout'
import ImpactChoices from '../../../container/ImpactFund/ImpactChoice/ImpactChoices'
import FundedProjects from '../../../container/ImpactFund/FundedProjects/FundedProjects'
import ProjectsToContribute from '../../../container/ImpactFund/ProjectsToContribute/ProjectsToContribute'
import ContributionModel from '../../../container/ImpactFund/ContributionModel/ContributionModel'
import ContactUs from '../../../container/ImpactFund/ContactUs/ContactUs'

const ImactFundPage = () => {
  return (
    <div>

        <ImpactFundedHero />
        <ImpactFundStatistics />
        <ImpcatFundedAbout />
        <ImpactChoices />
        <FundedProjects />
        <ProjectsToContribute />
        <ContributionModel />
        <ContactUs />
    </div>
  )
}

export default ImactFundPage