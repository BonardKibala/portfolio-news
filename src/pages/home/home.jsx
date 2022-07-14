import React from "react";
import bnrd from "../../images/bnrd4.webp";
import cv from "../../files/kibala-bonard-Cv.pdf";
import {
  Homecard,
  HomecardContainer,
  HomeContainer,
  Description,
  HomeDetailContainer,
  CardText,
  HomeCardImage,
  H1CardText,
  HomeDetail,
  Grade,
  Paragraph,
  DetailContent,
  Btn,
  BtnLink,
  GradeH2,
} from "./homeElements";

const Home = () => {
  return (
    <div id="home">
      <HomeContainer>
        <HomeDetailContainer>
          <HomeDetail>
            <div>
              <DetailContent>
                <Grade>
                  <GradeH2>Devéloppeur Full Stack</GradeH2>
                </Grade>
                <Description>
                  <Paragraph>
                    Expert en devéloppement logiciel dont les applications web,
                    Web Mobile, Mobile et Desktop.
                  </Paragraph>
                </Description>
              </DetailContent>
            </div>

            <Btn>
              <BtnLink href={`${cv}`}>Mon CV</BtnLink>
            </Btn>
          </HomeDetail>
        </HomeDetailContainer>

        <HomecardContainer>
          <Homecard>
            <HomeCardImage src={bnrd} alt="bonard image" />
          </Homecard>
          <CardText>
            <H1CardText> Bonard KIBALA INKUMBWA</H1CardText>
          </CardText>
        </HomecardContainer>
      </HomeContainer>
    </div>
  );
};
export default Home;
