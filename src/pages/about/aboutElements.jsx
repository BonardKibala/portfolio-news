import styled from "styled-components";

export const AboutContainer = styled.div`
height:100vh;
background-color: black;
color : white;
display flex;
flex-direction: column;
justify-content: space-evenly;
font-family: "Roboto", sans-serif;
padding-top: 4rem;
@media screen and (max-width: 768px) {
  height:auto;
  padding-top: 2rem;
}
`;
export const AboutTitle = styled.div`
margin: 0 auto;
text-align: center;
display flex;
flex-direction: column;
justify-content: space-evenly;
`;
export const Title = styled.h2`
  word-break: break-all;
  font-weight: bold;
  font-size: 2rem;
`;
export const Line = styled.div`
  border-bottom: 4px solid red;
  margin-top: 0.5rem;
  border-radius: 0.5rem;
`;

export const AboutContent = styled.div`
display flex;
flex-direction: row;
justify-content: center;
margin-top: 1.5rem;
margin-bottom: 1.5rem;

@media screen and (max-width: 768px) {
display flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
`;
export const DetailContainer = styled.div`
  width: 45%;
  border: 1px solid white;
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    width: 95%;
    margn: 0 auto;
    }
`;
export const Btn = styled.nav`
display: flex;
align-items: center;
margin : 0 auto;
// @media screen and (max-width: 768px){
//     margin-top: 2.5rem;
// }`;
export const Hello = styled.p`
  font-size: 1.5rem;
  font-style: italic;
  text-align: center;
  padding-top: 0.7rem;
  word-break: break-all;
`;
export const DescriptionParagraph = styled.p`
  font-size: 1.1rem;
  padding-top: 1rem;
  margin: 0 0.6rem 0 0.6rem;
  word-break: break-all;
  line-height: 1.4;
`;
export const Contacts = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  text-align: justify;
`;

export const Btns = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: .6rem;
padding-bottom: .8rem;
`

export const ImageContainer = styled.div`
width: 45%;
// border : 2px solid white;
display flex;
justify-content: center;
@media screen and (max-width: 768px) {
    width: 95%;
    margn: 0 auto;
    margin-bottom: 1rem;
    }
`;
export const ImageContent = styled.div`
  width: 98%;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius:20px;
  object-fit: cover;
`;
