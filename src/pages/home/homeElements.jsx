import styled from 'styled-components';

export const HomeContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: row;
justify-content: center;
background-color : #f1f0f3;
color: #010606;
padding-top: 5rem;

@media screen and (max-width: 768px){
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
}
`
export const HomeDetailContainer = styled.div`
width: 45%;
height: 100%;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
font-family: 'Roboto', sans-serif;

@media screen and (max-width: 768px){
width: 95%;
margin-bottom: 1.5rem;
}
`
export const HomeDetail =styled.div`
height: 80%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
margin: 0 auto;
`
export const DetailContent = styled.div`
width: 100%;
`
export const Grade =styled.div`
width: 98%;
border-top: 4px solid  #15cdfc;
border-bottom: 4px solid  #15cdfc;
border-right: 4px solid black;
border-left: 4px solid black;
margin: 0 auto;
font-weight : bold;
font-size: 1.5rem;
color : black;
border-radius : 2rem;
`
export const Description =styled.div`
width: 100%;
margin: 0 auto;
color : black;
text-align: left;
justify-content: justify;
`
export const Paragraph = styled.p`
word-break: break-all;
margin:.6rem;
line-height: 1.4;

`

export const HomecardContainer = styled.div`
width: 45%;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media screen and (max-width: 768px){
    width: 95%;
    height: 75vh;
    }
`
export const Homecard =styled.div`
height: 90%;
width: 100%;
`
export const HomeCardImage = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
`
export const CardText =styled.div`
height: 10%;
width: 90%;
text-align: center;
justify-content: center;
padding-top: .6rem;

`
export const H1CardText = styled.h1`
font-weight:bold;
font-size: 1.2rem;
color:black;
`;

export const Btn = styled.nav`
display: flex;
align-items: center;
margin : 0 auto;
`
export const BtnLink = styled.a`
border-radius: 4px;
background : #256ce1;
padding: 10px 22px;
color: #fff;
border : none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background : #000;
    color: #fff;
}
`
