import React from "react";
import * as S from "./HeaderStyle";
import ImageHeader from "../../images/imageheader.png";

export default function Header(){
    return(
    <S.HeaderSection>
        <S.HeaderImage>
            <img src={ImageHeader} alt="Kombi amarela"/>
        </S.HeaderImage>
        <S.HeaderText>
            <h1>Para qual estado você deseja ir?</h1>
            <input type="text" placeholder="Pesquisar"/>
            <button>Agendar</button>
        </S.HeaderText>
    </S.HeaderSection>
    );
};