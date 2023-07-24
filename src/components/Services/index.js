import React from 'react'
import Icon1 from '../../images/hip-hop.jpg'
import Icon2 from '../../images/rap-1.jpg'
import Icon3 from '../../images/country-music.webp'
import Icon4 from '../../images/Neon-podcast-logo.jpeg'
import Icon5 from '../../images/rock1.jpg'
import Icon6 from '../../images/disco1.jpeg'

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1> Discover </ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
              <ServicesIcon src={Icon1}/>
              <ServicesH2> Hip Hop </ServicesH2>
              <ServicesP>  Urban beats, poetic flow, cultural expression. </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon2}/>
              <ServicesH2> Rap  </ServicesH2>
              <ServicesP> Rhyme-packed verses, lyrical prowess, urban storytelling. </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon3}/>
              <ServicesH2> Country </ServicesH2>
              <ServicesP> Rural roots, heartfelt tales, twangy melodies. </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon4}/>
              <ServicesH2> Podcasts </ServicesH2>
              <ServicesP>  Listen to your favourite podcast </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon5}/>
              <ServicesH2> Rock </ServicesH2>
              <ServicesP> Lets rock n roll </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon6}/>
              <ServicesH2> Disco </ServicesH2>
              <ServicesP> Who doesn't love to party </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services