import React from 'react'
import ImpactFundedHero from '../../../container/ImpactFund/Hero/ImpactFundedHero'
import ImpactFundStatistics from '../../../container/ImpactFund/Statistics/ImpactFundStatistics'
import ImpcatFundedAbout from '../../../container/ImpactFund/ImpactFundedAbout/ImpcatFundedAbout'
import ImpactChoices from '../../../container/ImpactFund/ImpactChoice/ImpactChoices'
import FundedProjects from '../../../container/ImpactFund/FundedProjects/FundedProjects'

const ImactFundPage = () => {
  return (
    <div>

        <ImpactFundedHero />
        <ImpactFundStatistics />
        <ImpcatFundedAbout />
        <ImpactChoices />
        <FundedProjects />
    </div>
  )
}

export default ImactFundPage