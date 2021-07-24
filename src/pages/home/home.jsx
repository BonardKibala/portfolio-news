import React from 'react'
import bnrd from '../../images/bnrd.png'
import {Homecard, HomecardContainer, HomeContainer, HomeDetailContainer,CardText,HomeCardImage,H1CardText, HomeDetail} from './homeElements'

const Home = ()=>{

    return (
        <HomeContainer>
           <HomeDetailContainer>
              <HomeDetail>
                  Devéloppeur Full Stack
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