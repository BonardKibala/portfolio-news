import styled from "styled-components";



export const ProjectContainer = styled.div`
width: 100%;
background-color: white !important;
display: flex;
flex-direction: column;
justify-content: space-evenly;
padding-top: 1rem;
padding-bottom:2rem;
@media screen and (max-width: 768px) {
    height:auto;
    padding-top: 7rem;
  }
`;

export const ProjectContent = styled.div`
width: 90%;
display: flex;
flex-wrap: wrap;
padding-top: 1rem;
justify-content: space-evenly !important;
align-items: center;
align-content: center;
margin: 0 auto !important;

`;

export const CardProject = styled.div`
margin: 1rem;
width: 25%;
box-shadow: rgba(149, 157, 165, 0.2) 10px 8px 24px;
@media screen and (max-width: 768px) {
    width: 90%;
}
// @media screen and ( max-width: 825px) {
//     width: 40%;
// }
`