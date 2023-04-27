import React from "react";
import * as S from "./TravelSectionStyle";
import Image1 from "../../images/pessoasebaloes.png";
/* import Image2 from "../../images/pessoasdancando.png";
import Image3 from "../../images/rodanapiscina.png";
import RiodeJaneiro from "../../images/riodejaneiro.png";
import RiodasOstras from "../../images/riodasostras.png";
import CaldasNovas from "../../images/caldasnovas.png";
import Amazonia from "../../images/amazonia.png"; */

export default function TravelSection(){

    return(
        <S.TravelSectionMain>
            <h1>Olá</h1>
            <S.TravelSectionOne>
                <S.TravelSectionOneImg>
                    <img src={Image1} alt="Pessoas e balões"/>
                </S.TravelSectionOneImg>
                <S.TravelSectionOneText>
                    <h3>─── VIAGENS NACIONAIS</h3>
                    <h1>O clima perfeito,</h1>
                    <h1>no lugar perfeito</h1>
                    <p>Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos não tem preço.</p>
                    <button>AGENDAR</button>
                </S.TravelSectionOneText>
            </S.TravelSectionOne>
        </S.TravelSectionMain>
    );
};