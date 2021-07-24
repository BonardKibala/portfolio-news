import React from "react";
import bnrd from "../../images/bnrd.png";
import cv from "../../files/kibala-bonard-Cv.pdf"
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
} from "./homeElements";

const Home = () => {
  return (
    <HomeContainer>
      <HomeDetailContainer>
        <HomeDetail>
          <DetailContent>
            <Grade>Devéloppeur Full Stack</Grade>
            <Description>
              <Paragraph>
                Passionné dans le devéloppement logiciel dépuis un bon nombre
                d'années, je suis certifié{" "}
                <strong>Devéloppeur Full Stack</strong> à la{" "}
                <strong style={{ color: "red" }}>
                  {" "}
                  Kinshasa Digital Academy
                </strong>
                . Avez-vous des projets personnels ou d'entreprise? Faites-moi
                confiance.
              </Paragraph>
            </Description>
          </DetailContent>

          <DetailContent>
            <Grade>Référent Digital</Grade>
            <Description>
              <Paragraph>
                Pleinement passionné du numérique, je suis à votre service pour
                ce qui a trait au référencement et marketing digital. je suis
                certifié <strong>Référent Digital</strong> à la{" "}
                <strong style={{ color: "red" }}>
                  {" "}
                  Kinshasa Digital Academy
                </strong>
                .
              </Paragraph>
            </Description>
          </DetailContent>
          <DetailContent>
            <Grade>Engénieur Software</Grade>
            <Description>
              <Paragraph>
                Certifié <strong>Ingénieur Software</strong> à l'
                <strong style={{ color: "red" }}>
                  Université de Kinshasa (Génie Informatique)
                </strong>
                , je suis à votre service pour vous rendre un travail numérique
                digne de ce nom.
              </Paragraph>
            </Description>
          </DetailContent>
            <Btn>
              <BtnLink href={`${cv}`}>Voir mon CV</BtnLink>
            </Btn>
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
  );
};
export default Home;
