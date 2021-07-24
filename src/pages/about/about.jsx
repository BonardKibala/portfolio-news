import React from "react";
import bg from "../../images/bg1.jpg";
import { Btn, BtnLink, DetailContent } from "../home/homeElements";
import cv from "../../files/kibala-bonard-Cv.pdf"
import {
  AboutContainer,
  AboutContent,
  AboutTitle,
  DetailContainer,
  ImageContainer,
  Line,
  Title,
  ImageContent,
  Image,
  Hello,
  DescriptionParagraph,
  Contacts,
} from "./aboutElements";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Link} from 'react-router-dom';

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>
        <Title>A propos de moi</Title>
        <Line />
      </AboutTitle>
      <AboutContent>
        <ImageContainer>
          <ImageContent>
            <Image src={bg} />
          </ImageContent>
        </ImageContainer>

        <DetailContainer>
          <DetailContent>
            <Hello>Hello every body,</Hello>
            <DescriptionParagraph>Je m'appelle <strong>Bonard Kibala Inkumbwa</strong>, <strong></strong>devéloppeur Full Stack et Référent Digital
            certifié à la <strong style={{color:'#b00000'}}>Kinshasa Digital Academy</strong> et ingénieur Software certifié à 
            l'<strong style={{color:'#b00000'}}>Université de Kinshasa</strong> (UNIKIN) au département de mathématiques et informatique.

            </DescriptionParagraph>
            <DescriptionParagraph>
                Avez-vous des projets personnels ou d'entreprise à numériser (réaliser) ??, faites-moi confiance. Je
                travaille en <strong style={{color:'#b00000'}}>temps plein</strong> et aussi comme <strong style={{color:'#b00000'}}>freelance</strong> pour la réalisation de vos projets. prêt à vous satisfaire 
                et à vous fournir un travail digne de ce nom.
            </DescriptionParagraph>
            <Contacts>
                <Link to="/" style={{color:'white'}}>
                <FacebookIcon/>
                </Link>
                <Link to="/" style={{color:'white'}}>
                <TwitterIcon/>
                </Link>
                <Link to="/" style={{color:'white'}}>
                <LinkedInIcon/>
                </Link>
                <Link to="/" style={{color:'white'}}>
                <LinkedInIcon/>
                </Link>
            </Contacts>
            <Btn style={{marginLeft:'38%',marginTop:'.8rem',}}>
              <BtnLink href={`${cv}`}>Voir mon CV</BtnLink>
            </Btn>
          </DetailContent>
        </DetailContainer>
      </AboutContent>
    </AboutContainer>
  );
};
export default About;
