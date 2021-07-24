import React from 'react'
import bnrd from '../../images/bnrd.png'
import {Homecard, HomecardContainer, HomeContainer,Description,HomeDetailContainer,CardText,HomeCardImage,H1CardText, HomeDetail,Grade, Paragraph, DetailContent} from './homeElements'

const Home = ()=>{

    return (
        <HomeContainer>
           <HomeDetailContainer>
              <HomeDetail>
                  <DetailContent>
                  <Grade>
                  Devéloppeur Full Stack
                  </Grade>
                  <Description>
                      <Paragraph>
                        Passionné dans le devéloppement logiciel dépuis un bon nombre d'années, je suis certifié <strong>
                        Devéloppeur Full Stack</strong> à la <strong style={{color:'red'}}> Kinshasa Digital Academy</strong>.
                      </Paragraph>
                  </Description>
                  </DetailContent>

                  <DetailContent>
                  <Grade>
                  Référent Digital
                  </Grade>
                  <Description>
                      <Paragraph>
                      Pleinement passionné du numérique dépuis mon plus jeune âge et motivé de voir mon produit numérique atteindre un 
                      bon nombre de visiteurs de la toile, je suis certifié <strong>
                      Devéloppeur Full Stack</strong> à la <strong style={{color:'red'}}> Kinshasa Digital Academy</strong>.
                      </Paragraph>
                  </Description>
                  </DetailContent>
                  <DetailContent>
                  <Grade>
                  Engénieur Software
                  </Grade>
                  <Description>
                      <Paragraph>
                        Pleinement passionné du numérique dépuis un bon nombre d'années, je suis certifié <strong>
                        Devéloppeur Full Stack</strong> à la <strong style={{color:'red'}}> Kinshasa Digital Academy</strong>.
                      </Paragraph>
                  </Description>
                  </DetailContent>

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