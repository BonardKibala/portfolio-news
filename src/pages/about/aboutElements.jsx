import styled from 'styled-components';

export const AboutContainer = styled.div`
background-color: black;
color : white;
display flex;
flex-direction: column;
justify-content: space-evenly;
font-family: "Roboto", sans-serif;
`
export const AboutTitle = styled.div`
margin: 0 auto;
text-align: center;
display flex;
flex-direction: column;
justify-content: space-evenly;
padding-top: .9rem;
`
export const Title = styled.h2`
word-break: break-all;
font-weight : bold;
font-size: 1.5rem;
`
export const Line = styled.div`
border-bottom: 4px solid red;
margin-top: .5rem;
border-radius: .5rem;
`

export const AboutContent = styled.div`
display flex;
flex-direction: row;
justify-content: center;
margin-top: 1.5rem;
`
export const DetailContainer = styled.div`
width: 45%;
border : 2px solid white;
`
export const DetailContent = styled.div`
width: 98%;
`
export const Hello = styled.p`
font-size: 1.5rem;
font-style: italic;
text-align: center;
padding-top: .7rem;
word-break: break-all;
`
export const DescriptionParagraph = styled.p`
font-size: 1.1rem;
padding-top: 1rem;
margin: 0 .6rem 0 0.6rem;
word-break: break-all;
line-height: 1.4;
`
export const Contacts = styled.div`
width: 100%;
`

export const ImageContainer = styled.div`
width: 45%;
// border : 2px solid white;
display flex;
justify-content: center;
margin-bottom: 1.5rem;
`
export const ImageContent = styled.div`
width: 98%;
`
export const Image = styled.img`
width:100%;
height:100%;
object-fit: cover;
`
