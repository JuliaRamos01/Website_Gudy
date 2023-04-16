import styled from "styled-components";

export const NavSection = styled.div`
display: flex;
height: 10vh;
width: 100vw;
position: fixed;
z-index: 1;
/* border: purple 3px solid; */
background-color: white;
`;

export const NavLogo = styled.div`
display: flex;
/* border: yellow 3px solid; */
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
justify-content: flex-end;
/* border: blue 3px solid; */
width: 77vw;
ul{
    width: 30vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
}
li{
    cursor: pointer;
    color: #005BD5;
    font-size: 17px;
}
button{
    background-color: #005BD5;
    color: white;
    border: none;
    width: 10vw;
    height: 5vh;
    border-radius: 30px;
    text-transform: uppercase;
    letter-spacing: 3px;
}
`;