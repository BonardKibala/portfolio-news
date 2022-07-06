import React from "react";
import bg from "../../images/bg1.jpg";
import { BtnLink, DetailContent } from "../home/homeElements";
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
  Btns,
  Btn,
} from "./aboutElements";
import Link from "@mui/material/Link";
import {FaFacebookSquare,FaWhatsapp,FaLinkedinIn,FaGithubSquare} from 'react-icons/fa';

const About = () => {

  // React.useEffect(() =>{
  //   fetch(
  //     "https://lesouverainlibre.info/wp-json/wp/v2/posts/?_slug=actualite")
  //                 .then((res) => res.json())
  //                 .then((json) => {
  //                     console.log(json);
  //                 })
  // })
  return (
    <div id="about">
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
            <Link href='https://web.facebook.com/bonard.kibala' style={{marginRight:'10px'}}><FaFacebookSquare style={{color:'white', fontSize:'1.7rem',}}/></Link>
              <Link href='tel:+243819097177' style={{marginRight:'10px'}}><FaWhatsapp style={{color:'green', fontSize:'1.7rem',}}/></Link>
              <Link href='https://www.linkedin.com/in/bonard-kibala-422a761ba/' style={{marginRight:'10px'}}><FaLinkedinIn style={{color:'white', fontSize:'1.7rem',}}/></Link>
              <Link href='https://github.com/BonardKibala' style={{marginRight:'10px'}}><FaGithubSquare style={{color:'white', fontSize:'1.7rem'}}/></Link>
            </Contacts>
            <Btns>
            <Btn>
              <BtnLink href={`${cv}`}>Voir mon CV</BtnLink>
            </Btn>
            </Btns>
          </DetailContent>
        </DetailContainer>
      </AboutContent>
    </AboutContainer>
    </div>
    
  );
};
export default About;
