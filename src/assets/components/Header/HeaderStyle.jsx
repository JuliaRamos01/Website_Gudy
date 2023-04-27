import styled from "styled-components";

export const HeaderSection = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 100vh;
/* border: blue 3px solid; */
`;

export const HeaderImage = styled.div`
display: flex;
width: 100%;
/* border: yellow 3px solid; */

img{
    width: 100%;
    height: 100vh;
    object-fit: cover;
}
`;

export const HeaderText = styled.div`
display: flex;
position: absolute;
flex-direction: column;
justify-content: space-around;
width: 40vw;
height: 40vh;
padding-left: 15px;
/* align-items: center; */
/* border: red 3px solid; */
h1{
    color: #005BD5;
    font-weight: bold;
    font-size: 50px;
    padding: 15px 0 0 0;
}
input{
    border: none;
    width: 25vw;
    height: 5vh;
    border-radius: 20px;
    padding-left: 12px;
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