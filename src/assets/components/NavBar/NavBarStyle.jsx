import styled from "styled-components";

export const NavSection = styled.div`
display: flex;
height: 13vh;
width: 100vw;
position: fixed;
z-index: 1;
border: purple 3px solid;
`;

export const NavLogo = styled.div`
display: flex;
border: yellow 3px solid;
width: 20vw;
align-items: center;
justify-content: center;

img{
    width: 12vw;
    height: 4.5vh;
}
`;

export const NavText = styled.div`
display: flex;
border: blue 3px solid;
width: 80vw;
`;