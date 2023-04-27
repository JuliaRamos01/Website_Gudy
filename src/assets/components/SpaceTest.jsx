import React from "react";
import * as S from "./style";
import Image1 from "../images/pessoasebaloes.png";


export default function Spacetest() {

    return (
        <S.DivSpace>
            <h1>Olá</h1>
            <S.TravelSectionOneImg>
                    <img src={Image1} alt="Pessoas e balões"/>
            </S.TravelSectionOneImg>
        </S.DivSpace>
    );
};