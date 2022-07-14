import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: white !important;
  color: #010606;
  padding-top: 5rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;
export const HomeDetailContainer = styled.div`
  width: 45%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Roboto", sans-serif;

  @media screen and (max-width: 768px) {
    width: 95%;
    margin-bottom: 1.5rem;
  }
`;
export const HomeDetail = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 auto;
`;
export const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;

  border: 1px solid black;
  border-radius: 10px;
  padding-bottom: 1rem;
  box-shadow: rgba(149, 157, 165, 0.2) 10px 8px 24px;
`;
export const Grade = styled.div`
  width: 98%;
  margin: 0 auto;
  font-weight: bold;
  color: black;
`;
export const GradeH2 = styled.h2`
  font-size: 2.5rem;
  font-style: italic;
  font-family: "Roboto", sans-serif;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
export const Description = styled.div`
  width: 100%;
  margin: 0 auto;
  color: black;
  text-align: left;
  justify-content: justify;
  margin-top: 1rem;
  font-family: monospace;
  word-break: break-all;
`;
export const Paragraph = styled.p`
  word-break: break-all;
  margin: 0.6rem;
  line-height: 1.4;
  font-size: 1rem;
`;

export const HomecardContainer = styled.div`
  width: 45%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 95%;
    height: 40vh;
  }
`;
export const Homecard = styled.div`
  height: 90%;
  width: 100%;
`;
export const HomeCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export const CardText = styled.div`
  height: 10%;
  width: 90%;
  text-align: center;
  justify-content: center;
  margin-top: -2rem;
  @media screen and (max-width: 768px) {
    margin-top: -3.5rem;
  }
`;
export const H1CardText = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
  color: black;
`;

export const Btn = styled.nav`
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-top: -6rem;
  @media screen and (max-width: 768px) {
    margin-top: 2.5rem;
  }
`;
export const BtnLink = styled.a`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #000;
    color: #fff;
  }
`;
