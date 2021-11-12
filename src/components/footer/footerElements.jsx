import styled from 'styled-components';
import Link from "@mui/material/Link";

export const Footers = styled.div`
background-color: black !important;
color: white !important;
padding: 2em 4.5em 2em 4.5em !important;
font-family: "Roboto", sans-serif;

@media screen and (max-width: 768px) {
    height:auto;
    padding-top: 6rem !important;
  }
`
export const Copyright = styled.div`
text-align: center !important;
`

export const Input = styled.input`
&::placeholder {
    color : green;
}
`;

export const Social = styled.div`
  
}
`;
export const SocialLink = styled(Link)`

`;