import styled from "styled-components";

export const SkillsContainer = styled.div`
width: 100%;
height: 100vh;
background-color: #f2eff3;
color : #171717;
display flex;
flex-direction: column;
justify-content: space-evenly;
font-family: "Roboto", sans-serif;
padding-top: 4rem;
@media screen and (max-width: 768px) {
  height: auto;
  padding-top: 7rem;
  padding-bottom:3rem;
}
`;

export const SkillsTitle = styled.div`
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
  margin-top: 0.2rem;
  border-radius: 0.5rem;
  @media screen and (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const SkillsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly !important;
  margin: 0 auto;
  background-color: black;
  width: 65%;
  border-radius: 10px;
  padding-top: 2rem;
  padding-bottom: 2rem;
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;
export const Skill = styled.div`
  color: #171719;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 0.6rem;
  width: 15%;
  border-radius: 10px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 15%;
  }
`;
export const SkillImage = styled.div`
  font-size: 5rem;
  margin: 0 auto;
  color: ${(props) => props.color};
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
export const SkillName = styled.p`
  color: white;
  font-size: 1.2em;
  text-align: center;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  @media screen and (max-width: 768px) {
    font-size: 0.5rem;
  }
`;
export const CircleSkills = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }
`;
export const Circle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 8.5rem;
  height: 8.5rem;
  border: 0.2em solid ${(props) => props.color};
  border-radius: 100%;
  background-color: white;
  text-align: center;
  font-weight: bold;

  &:nth-child(2) {
    margin-left: -5rem;
  }
  &:hover {
    background-color: ${(props) => props.hoverColor};
    cursor: pointer;
    color: white;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin:0.5rem;
    width: 8rem;
    height: 8rem;
    &:nth-child(2) {
      margin-left: 0rem;
      margin-top: 2.5rem;
    }
    &:nth-child(1),&:nth-child(3) {
      margin-top: 0.7rem;
    }
  }
`;
