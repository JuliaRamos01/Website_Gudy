import styled from "styled-components";

export const ContactContainer = styled.div`
display: flex;
height: 85vh;
align-items: center;
justify-content: center;
background-color: #005BD5;
/* border: green 3px solid; */
`;

export const ContactForm = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
height: 60vh;
width: 50vw;
/* border: purple 3px solid; */
h1{
    text-align: center;
    color:white;
}
input{
    width: 50vw;
    height: 7vh;
    border-radius: 20px;
    padding-left: 10px;
    border: none;
}
button{
    background-color: #005BD5;
    color: white;
    border:white 1px solid;
    width: 10vw;
    height: 5vh;
    border-radius: 30px;
    text-transform: uppercase;
    letter-spacing: 3px;
    cursor: pointer;
}
`;

export const Messagebox = styled.div`
display: flex;
input{
    height: 25vh;
    padding-bottom: 135px;
}
`;