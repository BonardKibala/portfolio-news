import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';

export const HomeContainer = styled.div`
width: 100vw;
height: 86.2vh;
display: flex;
flex-direction: row;
justify-content: center;
`
export const HomeDetailContainer = styled.div`
width: 45%;
height: 100%;
border: 2px solid red;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
font-family: 'Roboto', sans-serif;
`
export const HomeDetail =styled.div`
height: 90%;
width: 98%;
border: 1px solid black;
display: flex;
flex-direction: column;
justify-content: center;
margin: 0 auto;
`
export const Grade =styled.div`
width: 98%;
border: 1px solid black;
margin: 0 auto;
font-weight : bold;
font-size: 2rem;
color : black;
`
export const Description =styled.div`
width: 98%;
border: 1px solid black;
margin: 0 auto;
color : black;
text-align: left;
`
export const Paragraph = styled.p`
word-break: break-all;
margin:.5rem;
`

export const HomecardContainer = styled.div`
width: 45%;
height: 100%;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
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
