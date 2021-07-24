import React from 'react'
import bnrd from '../../images/bnrd.png'
import {Homecard, HomecardContainer, HomeContainer,Description,HomeDetailContainer,CardText,HomeCardImage,H1CardText, HomeDetail,Grade, Paragraph} from './homeElements'

const Home = ()=>{

    return (
        <HomeContainer>
           <HomeDetailContainer>
              <HomeDetail>
                  <Grade>
                  Devéloppeur Full Stack
                  </Grade>
                  <Description>
                      <Paragraph>
                          hfdjfffffffffffffffffffffffffdjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
                          skdsjdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                          sdlssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                      </Paragraph>
                  </Description>
              </HomeDetail>
           </HomeDetailContainer>

           <HomecardContainer>
               <Homecard>
                   <HomeCardImage src={bnrd} alt="bonard image" />
               </Homecard>
               <CardText>
               <H1CardText> Bonard Kibala Inkumbwa</H1CardText>
               </CardText>
           </HomecardContainer>
        </HomeContainer>
    )
}
export default Home;