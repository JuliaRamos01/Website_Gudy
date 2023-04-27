import styled from "styled-components";

export const GalerySection = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 150vh;
/* border: purple 3px solid; */
`;

export const GaleryText = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 30vh;
width: 30vw;
/* border: blue 2px solid; */
p{
    color: #8B8B8B;
    font-size: 20px;
}
h1{
    text-align: center;
    color:#8B8B8B;
    font-size: 40px;
}
`;

export const GaleryImages = styled.div`
height: 70vh;
width: 55vw;
display: grid;
grid-template-columns: 200px 200px 200px;
align-items: center;
justify-content: space-evenly;
/* border: pink 3px solid; */

img{
    width: 16vw;
}
`;

export const GaleryCards = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
text-align: center;
height: 50vh;
width: 70vw;
/* border: magenta 3px solid; */
`;

export const GaleryCardOne = styled.div`
height: 35vh;
width: 15vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #EEEEEE;
/* border: yellow 3px solid; */

img{
    width: 6vw;
    height: 13vh;
    padding-bottom: 20px;
}

p{
    color: #005BD5;
    font-weight: bold;
    font-size: 20px;
}
`;

export const GaleryCardTwo = styled.div`
height: 35vh;
width: 15vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #005BD5;
/* border: yellow 3px solid; */

img{
    width: 6vw;
    height: 13vh;
    padding-bottom: 20px;
}

p{
    /* text-align: center; */
    color: #FFFFFF;
    font-weight: bold;
    font-size: 20px;
}
`;

export const GaleryCardThree = styled.div`
height: 35vh;
width: 15vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #EEEEEE;
/* border: yellow 3px solid; */

img{
    width: 5vw;
    height: 13vh;
    padding-bottom: 20px;
}

p{
    color: #005BD5;
    font-weight: bold;
    font-size: 20px;
}
`;

export const GaleryCardFour = styled.div`
height: 35vh;
width: 15vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #005BD5;
/* border: yellow 3px solid; */

img{
    width: 6vw;
    height: 13vh;
    padding-bottom: 20px;
}

p{
    color: #EEEEEE;
    font-weight: bold;
    font-size: 20px;
}
`;